import { actionWatcher } from './app/containers/Task/saga';

export default function* rootSaga() {
  yield (actionWatcher());
}