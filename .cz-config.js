// https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js
module.exports = {
  // 自定义可选类型
  types: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'docs', name: 'docs: 文档修改' },
    { value: 'style', name: 'style: 代码格式(不影响代码运行的变动)' },
    { value: 'refactor', name: 'refactor: 重构(既不是增加feature， 也不是修复bug)' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 增加测试' },
    { value: 'chore', name: 'chore: 构建过程辅助工具的变动' },
    { value: 'revert', name: 'revert: 版本回退' },
    { value: 'build', name: 'build: 打包' }
  ],
  // 步骤
  messages: {
    type: '请选择提交类型:',
    // scope: '请输入修改的范围(可选)',
    customScope: '请输入修改的范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选), 使用“|”来换行',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确认要使用已上信息提交?(y/n)'
  },
  allowCustomScopes: true,
  // 跳过步骤
  // skipQuestions: ['body', 'footer', 'scope'],
  skipQuestions: ['body', 'footer', 'customScope'],
  subjectLimit: 72
}
