const { Octokit } = require('@octokit/rest');

// octokit should be authenticated with GITHUB_TOKEN from GA
const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
});

(async () => {
    let waiPrNumber;
    let createPullRequestResult;

    const runId = process.env.RUN_ID;
    const isSuccess = process.env.OUTCOME === 'success';
    const repositoryOwner = process.env.REPO_OWNER;
    const previewLink = 'wai-aria-practices-howarde.netlify.app';
    // const previewLink = 'wai-aria-practices2.netlify.app';

    if (!isSuccess) {
        const pullsListResult = await octokit.rest.pulls.list({
            owner: repositoryOwner,
            repo: 'wai-aria-practices'
        });
        console.info('pull.list.success');

        // check to see if a PR already exists with the head branch and use that PR's number instead
        for (let i = 0 ; i < pullsListResult.data.length ; i++) {
            let data = pullsListResult.data[i];
            if (data.head.ref === 'apg/' + process.env.APG_BRANCH) {
                waiPrNumber = data.number;
                break;
            }
        }

        if (!waiPrNumber) {
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

        const getApgPrResult = await octokit.rest.pulls.get({
            owner: repositoryOwner,
            repo: 'aria-practices',
            pull_number: process.env.APG_PR_NUMBER
        });
        console.info('pull.get.success');

        // Append error to pr body
        let apgPrBody = getApgPrResult.data.body || '';
        let previewLinkIndex = apgPrBody.indexOf('[WAI Preview Link]');
        if (previewLinkIndex < 0) { // Need to account for error content
            // Assumes a previous link didn't exist, find error content
            previewLinkIndex = apgPrBody.indexOf('PR Preview [failed to build]')
        }

        let previewLinkUrl = `https://deploy-preview-${waiPrNumber || createPullRequestResult.data.number}--${previewLink}`;
        if (previewLinkIndex < 0) { // no preview link in PR body; append
            apgPrBody = `${apgPrBody}\n___\nPR Preview [failed to build](https://github.com/${repositoryOwner}/wai-aria-practices/runs/${runId}?check_suite_focus=true). _(Last tried on ${new Date().toUTCString()})._`
        } else { // replace existing preview link in PR body
            let stringRemainder = apgPrBody.substring(previewLinkIndex);
            let urlToChange = stringRemainder.match(/\(([^)]+)\)/)[1];
            apgPrBody = apgPrBody.replace(urlToChange, previewLinkUrl);
        }

        await octokit.rest.pulls.update({
            owner: repositoryOwner,
            repo: 'aria-practices',
            pull_number: process.env.APG_PR_NUMBER,
            body: apgPrBody
        });
        return;
    }

    try {
        const pullsListResult = await octokit.rest.pulls.list({
            owner: repositoryOwner,
            repo: 'wai-aria-practices'
        });
        console.info('pull.list.success');

        // check to see if a PR already exists with the head branch and use that PR's number instead
        for (let i = 0 ; i < pullsListResult.data.length ; i++) {
            let data = pullsListResult.data[i];
            if (data.head.ref === 'apg/' + process.env.APG_BRANCH) {
                waiPrNumber = data.number;
                break;
            }
        }

        if (!waiPrNumber) {
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

        const getApgPrResult = await octokit.rest.pulls.get({
            owner: repositoryOwner,
            repo: 'aria-practices',
            pull_number: process.env.APG_PR_NUMBER
        });
        console.info('pull.get.success');

        let apgPrBody = getApgPrResult.data.body || '';
        let previewLinkIndex = apgPrBody.indexOf('[WAI Preview Link]');
        let previewLinkUrl = `https://deploy-preview-${waiPrNumber || createPullRequestResult.data.number}--${previewLink}`;

        if (previewLinkIndex < 0) { // no preview link in PR body; append
            apgPrBody = `${apgPrBody}\n___\n[WAI Preview Link](${previewLinkUrl})`;
        } else { // replace existing preview link in PR body
            let stringRemainder = apgPrBody.substring(previewLinkIndex);
            let urlToChange = stringRemainder.match(/\(([^)]+)\)/)[1];
            apgPrBody = apgPrBody.replace(urlToChange, previewLinkUrl);
        }

        // creates preview link in aria-practices PR
        await octokit.rest.pulls.update({
            owner: repositoryOwner,
            repo: 'aria-practices',
            pull_number: process.env.APG_PR_NUMBER,
            body: apgPrBody
        });
        console.info('pull.update.success');
    } catch (e) {
        console.error('octokit.call.fail', e);
    }
})();
