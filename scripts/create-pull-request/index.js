const { Octokit } = require('@octokit/rest');

// octokit should be authenticated with GITHUB_TOKEN from GA
const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
});

(async () => {
    try {
        const createPullRequestResult = await octokit.rest.pulls.create({
            owner: 'howard-e',
            repo: 'wai-aria-practices',
            head: 'howard-e:' + process.env.APG_BRANCH,
            base: 'master',
            title: process.env.APG_BRANCH + ' generated by aria-practices',
            body: 'Automatically generated by aria-practices [TODO: reference relevant commit]',
            maintainer_can_modify: true,
        });
        console.info('pull.create.success', createPullRequestResult);
        // TODO: on 422 and error is not that PR already exists for branch, terminate

        const getApgPrRResult = await octokit.rest.pulls.get({
            owner: 'howard-e',
            repo: 'aria-practices',
            pull_number: process.env.APG_PR_NUMBER
        })
        console.info('pull.get.success', getApgPrRResult.data);

        let apgPrBody = getApgPrRResult.data.body || '';
        let previewLinkIndex = apgPrBody.indexOf('[Preview Link]');
        let previewLinkUrl = `https://deploy-preview-${createPullRequestResult.data.number}--wai-aria-practices-howarde.netlify.app`;

        if (previewLinkIndex < 0) { // no preview link in PR body; append
            apgPrBody = `${apgPrBody}\n___\n[Preview Link](${previewLinkUrl})`;
        } else { // replace existing preview link in PR body
            let stringRemainder = apgPrBody.substring(previewLinkIndex);
            let urlToChange = stringRemainder.match(/\(([^)]+)\)/)[1];
            apgPrBody.replace(urlToChange, previewLinkUrl);
        }

        // creates preview link in aria-practices PR
        const updateApgPrResult = await octokit.rest.pulls.update({
            owner: 'howard-e',
            repo: 'aria-practices',
            pull_number: process.env.APG_PR_NUMBER,
            body: apgPrBody
        })
        console.info('pull.update.success', updateApgPrResult.data);
    } catch (e) {
        console.error('pull.create.fail', e);
    }
})();
