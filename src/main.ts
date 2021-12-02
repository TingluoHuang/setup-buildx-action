import * as os from 'os';
import * as path from 'path';
import * as buildx from './buildx';
import * as context from './context';
import * as stateHelper from './state-helper';
import * as util from './util';
import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function run(): Promise<void> {

  const dockerConfigHome: string = path.join(os.homedir(), '.docker');

  core.startGroup(`Download and install buildx`);
  await buildx.install('latest', dockerConfigHome);
  core.endGroup();
}

run();

