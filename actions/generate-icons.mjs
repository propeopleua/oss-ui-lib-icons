import {readFileSync, writeFileSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));
const FILE_PATH = resolve(DIRNAME, '..', 'dist', 'hlxico.css');
const DEST_FILE_PATH = resolve(DIRNAME, '..', 'icons.js');

const data = readFileSync(FILE_PATH, {encoding: 'utf-8'});

const matches = Array.from(data.matchAll(/\.(hi-.+?):before/gis));
const classes = matches.map(match => match[1]).filter(item => `${item || ''}`.length).map(cl => `"${cl}"`);
classes.sort();
writeFileSync(DEST_FILE_PATH, `export default [${classes.join(', ')}];`, {encoding: 'utf-8'})
