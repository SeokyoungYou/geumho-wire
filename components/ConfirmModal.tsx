type ConfirmModal = {
  onOk: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<ConfirmModal> = ({ onOk, onCancel }) => {
  const onClickOk = () => {
    onOk();
  };
  const onClickCancel = () => {
    onCancel();
  };
  return (
    <section className="fixed inset-0 z-20 flex items-start justify-center">
      <div className=" flex flex-col bg-amber-300 p-1">
        <header>Confirm modal</header>
        <div className="flex flex-col items-center justify-center gap-4 bg-amber-200 px-10 py-6">
          <span>Do you really want to leave?</span>
          <div className="flex items-center justify-center gap-4">
            <button className={confirmButton} onClick={onClickOk}>
              OK
            </button>
            <button className={confirmButton} onClick={onClickCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConfirmModal;

const confirmButton = "h-8 w-20 rounded-md bg-amber-50 cursor-pointer";
