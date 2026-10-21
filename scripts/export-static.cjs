const { spawnSync } = require('node:child_process');

const result = spawnSync(process.execPath, [require.resolve('next/dist/bin/next'), 'build', '--webpack'], {
  stdio: 'inherit',
  env: { ...process.env, NEXT_STATIC_EXPORT: '1' },
});
if (result.error) console.error(result.error);
process.exit(result.status ?? 1);
