import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
      transparentMode: 'top',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { text: '文档', url: '/docs', active: 'nested-url' },
      { text: '当前进度', url: '/docs/reproduction/progress' },
      { text: '资源治理', url: '/docs/resources' },
    ],
  };
}
