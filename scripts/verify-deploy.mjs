import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const requiredArtifacts = [
    'dist/index.html',
    'dist/services/index.html',
    'dist-server/server.js',
];

const missingArtifacts = requiredArtifacts.filter((file) => !existsSync(resolve(file)));

if (missingArtifacts.length > 0) {
    console.error(`\n[deploy] Missing required artifact(s): ${missingArtifacts.join(', ')}\n`);
    process.exit(1);
}

console.log('[deploy] Frontend, prerendered routes, and server startup file are ready.');
