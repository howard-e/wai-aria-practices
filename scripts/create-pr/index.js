const { Octokit } = require('@octokit/rest');

// octokit should be authenticated with GITHUB_TOKEN from GA
const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
});

const jobId = process.env.JOB_ID;
const isSuccess = process.env.OUTCOME === 'success';
const repositoryOwner = process.env.REPO_OWNER;
const previewLink = 'wai-aria-practices-howarde.netlify.app';

const updateApgPrBody = async (waiPrNumber, createPullRequestResult) => {
    // Update APG PR
    const getApgPrResult = await octokit.rest.pulls.get({
        owner: repositoryOwner,
        repo: 'aria-practices',
        pull_number: process.env.APG_PR_NUMBER
    });
    console.info('pull.get.success');

    // Needed to append error to PR body
    let apgPrBody = getApgPrResult.data.body || '';

    // Find index of existing successful or failure build links in the body
    let previewLinkIndex = apgPrBody.indexOf('[WAI Preview Link]');
    if (previewLinkIndex < 0) { // Need to account for error content
        // Assumes a previous link didn't exist, find error content
        previewLinkIndex = apgPrBody.indexOf('WAI Preview Link [failed to build]')
    }

    const previewLinkUrl = isSuccess
        ? `https://deploy-preview-${waiPrNumber || createPullRequestResult.data.number}--${previewLink}`
        : `https://github.com/${repositoryOwner}/wai-aria-practices/runs/${jobId}?check_suite_focus=true`;
    const additionalBodyContent = isSuccess
        ? `[WAI Preview Link](${previewLinkUrl}) _(Last built on ${new Date().toUTCString()})._`
        : `WAI Preview Link [failed to build](${previewLinkUrl}) on 'Update site files' step. _(Last tried on ${new Date().toUTCString()})._`;
    if (previewLinkIndex < 0) { // no preview link in PR body; append
        apgPrBody = `${apgPrBody}\n___\n${additionalBodyContent}`;
    } else { // replace existing preview link in PR body
        let stringRemainder = apgPrBody.substring(previewLinkIndex);
        apgPrBody = apgPrBody.replace(stringRemainder, additionalBodyContent);
    }

    await octokit.rest.pulls.update({
        owner: repositoryOwner,
        repo: 'aria-practices',
        pull_number: process.env.APG_PR_NUMBER,
        body: apgPrBody
    });
    console.info('pull.update.success.failure.block', apgPrBody);
}

(async () => {
    let waiPrNumber;
    let createPullRequestResult;

    // const previewLink = 'wai-aria-practices2.netlify.app';

    if (!isSuccess) {
        try {
            await updateApgPrBody();

            // Update APG PR
            // const getApgPrResult = await octokit.rest.pulls.get({
            //     owner: repositoryOwner,
            //     repo: 'aria-practices',
            //     pull_number: process.env.APG_PR_NUMBER
            // });
            // console.info('pull.get.success');
            //
            // // Needed to append error to PR body
            // let apgPrBody = getApgPrResult.data.body || '';
            //
            // // Find index of existing successful or failure build links in the body
            // let previewLinkIndex = apgPrBody.indexOf('[WAI Preview Link]');
            // if (previewLinkIndex < 0) { // Need to account for error content
            //     // Assumes a previous link didn't exist, find error content
            //     previewLinkIndex = apgPrBody.indexOf('WAI Preview Link [failed to build]')
            // }
            //
            // const previewLinkUrl = `https://github.com/${repositoryOwner}/wai-aria-practices/runs/${jobId}?check_suite_focus=true`;
            // const additionalBodyContent = `WAI Preview Link [failed to build](${previewLinkUrl}) on 'Update site files' step. _(Last tried on ${new Date().toUTCString()})._`;
            // if (previewLinkIndex < 0) { // no preview link in PR body; append
            //     apgPrBody = `${apgPrBody}\n___\n${additionalBodyContent}`;
            // } else { // replace existing preview link in PR body
            //     let stringRemainder = apgPrBody.substring(previewLinkIndex);
            //     apgPrBody = apgPrBody.replace(stringRemainder, additionalBodyContent);
            // }
            //
            // await octokit.rest.pulls.update({
            //     owner: repositoryOwner,
            //     repo: 'aria-practices',
            //     pull_number: process.env.APG_PR_NUMBER,
            //     body: apgPrBody
            // });
            // console.info('pull.update.success.failure.block', apgPrBody);
        } catch (e) {
            console.error('octokit.call.failure.block.fail', e);
        }
        return;
    }

    try {
        // Get current list of PRs for this repository
        const pullsListResult = await octokit.rest.pulls.list({
            owner: repositoryOwner,
            repo: 'wai-aria-practices'
        });
        console.info('pull.list.success');

        // Check to see if a PR already exists with the head branch and use that PR's number instead
        for (let i = 0; i < pullsListResult.data.length; i++) {
            let data = pullsListResult.data[i];
            if (data.head.ref === 'apg/' + process.env.APG_BRANCH) {
                waiPrNumber = data.number;
                break;
            }
        }

        if (!waiPrNumber) {
            // Create a PR if none exists
            createPullRequestResult = await octokit.rest.pulls.create({
                owner: repositoryOwner,
                repo: 'wai-aria-practices',
                head: 'apg/' + process.env.APG_BRANCH,
                base: 'main',
                title: 'apg/' + process.env.APG_BRANCH + ' generated by aria-practices',
                body: `Generated by https://github.com/${repositoryOwner}/aria-practices/commit/${process.env.APG_BRANCH}.`,
                draft: true,
                maintainer_can_modify: true
            });
            console.info('pull.create.success');
        }

        await updateApgPrBody(waiPrNumber, createPullRequestResult);

        // Update APG PR
        // const getApgPrResult = await octokit.rest.pulls.get({
        //     owner: repositoryOwner,
        //     repo: 'aria-practices',
        //     pull_number: process.env.APG_PR_NUMBER
        // });
        // console.info('pull.get.success');
        //
        // // Needed to append error to PR body
        // let apgPrBody = getApgPrResult.data.body || '';
        //
        // // Find index of existing successful or failure build links in the body
        // let previewLinkIndex = apgPrBody.indexOf('[WAI Preview Link]');
        // if (previewLinkIndex < 0) { // Need to account for error content
        //     // Assumes a previous link didn't exist, find error content
        //     previewLinkIndex = apgPrBody.indexOf('WAI Preview Link [failed to build]')
        // }
        //
        // let previewLinkUrl = `https://deploy-preview-${waiPrNumber || createPullRequestResult.data.number}--${previewLink}`;
        // const additionalBodyContent = `[WAI Preview Link](${previewLinkUrl}) _(Last built on ${new Date().toUTCString()})._`;
        // if (previewLinkIndex < 0) { // no preview link in PR body; append
        //     apgPrBody = `${apgPrBody}\n___\n${additionalBodyContent}`;
        // } else { // replace existing preview link in PR body
        //     let stringRemainder = apgPrBody.substring(previewLinkIndex);
        //     apgPrBody = apgPrBody.replace(stringRemainder, additionalBodyContent);
        // }
        //
        // // creates preview link in aria-practices PR
        // await octokit.rest.pulls.update({
        //     owner: repositoryOwner,
        //     repo: 'aria-practices',
        //     pull_number: process.env.APG_PR_NUMBER,
        //     body: apgPrBody
        // });
        // console.info('pull.update.success.success.block', apgPrBody);
    } catch (e) {
        console.error('octokit.call.success.block.fail', e);
    }
})();
