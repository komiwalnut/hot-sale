import "./ConfirmModal.css";

function ConfirmModal({ message, onCancel, onConfirm }) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">
        <p className="confirm-message">{message}</p>
        <div className="confirm-actions">
          <button className="cancel-btn" onClick={onCancel}>Cancel</button>
          <button className="confirm-btn" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
