import { useMovetoPage } from "../../../commons/hooks/movepage";
import FindPresenter from "./find.presenter";

export default function FindContainer() {
  const { onClickMoveToPage } = useMovetoPage();

  return <FindPresenter onClickMoveToPage={onClickMoveToPage} />;
}
