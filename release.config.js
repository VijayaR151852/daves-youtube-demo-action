module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/VijayaR151852/daves-youtube-demo-action.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/git', {
      assets: ['dist/*.js', 'dist/*.js.map'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    }],
    '@semantic-release/github'
  ]
};
