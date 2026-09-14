import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const requiredArtifacts = [
    'dist/index.html',
    'dist/services/index.html',
    'dist/services/club-catering/index.html',
    'dist/services/contract-catering/index.html',
    'dist/tenders-eoi/index.html',
    'dist/clubs/index.html',
    'dist/clubs/rsl-clubs/index.html',
    'dist/locations/index.html',
    'dist/locations/western-sydney-club-catering/index.html',
    'dist/locations/parramatta-club-catering/index.html',
    'dist/insights/index.html',
    'dist/insights/in-house-vs-contract-catering-clubs/index.html',
    'dist/sitemap.xml',
    'dist-server/server.js',
];

const missingArtifacts = requiredArtifacts.filter((file) => !existsSync(resolve(file)));

if (missingArtifacts.length > 0) {
    console.error(`\n[deploy] Missing required artifact(s): ${missingArtifacts.join(', ')}\n`);
    process.exit(1);
}

console.log('[deploy] Frontend, prerendered routes, and server startup file are ready.');
