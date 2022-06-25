import { GitHubRepoInfo } from './github';
import { Mail } from './mail';

export type MailResponse = {
  mails: Mail[];
};
export type RepoResponse = GitHubRepoInfo[];
