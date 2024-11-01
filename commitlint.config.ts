/**
 * @file Commitlint configuration for the Monorepo.
 * @author Gillian Tunney
 * @see [commitlint - Lint commit messages](https://commitlint.js.org/#/)
 */
import type { UserConfig as CommitlintUserConfig } from '@commitlint/types'
import { commitlint /*CommitlintUserConfig*/ } from '@snailicide/build-config'

const Configuration: CommitlintUserConfig = commitlint.configuration()

const overrides: CommitlintUserConfig = {
    rules: {
        'scope-empty': [2, 'always'],
    },
}

export default { ...Configuration, ...overrides }
