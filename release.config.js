module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    "@semantic-release/npm",
    "@semantic-release/github",
    ['@semantic-release/git', {
      assets: ['dist/**/*.{js,css}', 'docs', 'package.json'],
      message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}'
    }]
  ],
  branches: ['main'],
}