/**
 *
 * Asynchronously loads the component for FormBox
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
