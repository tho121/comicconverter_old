import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the ComicConverter extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'ComicConverter',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension ComicConverter is activated!');
  }
};

export default extension;
