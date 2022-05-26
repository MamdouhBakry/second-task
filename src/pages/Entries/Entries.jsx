import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getEntryByID } from "../../redux/actions/categoryactions";
import "./Entries.scss";
import { Dialog } from "primereact/dialog";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Entries() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  const dispatch = useDispatch();
  const filteredEntries = useSelector(
    (state) => state.categories.selectedEntries
  );
  const [showDetails, setShowDetails] = useState({
    show: false,
    entryDetails: {},
  });
  console.log(params.catName);
  console.log(filteredEntries);
  useEffect(() => {
    dispatch(getEntryByID(params.catName));
  }, []);
  return (
    <div>
      <h2 className="text-center">All Entries Belong to {params.catName}</h2>
      <div className="row">
        {filteredEntries &&
          filteredEntries.map((entry, i) => (
            <div
              onClick={(e) =>
                setShowDetails({
                  ...showDetails,
                  show: true,
                  entryDetails: entry,
                })
              }
              className="col-4"
            >
              <div className="entry">
                <div>{entry.Category}</div>
                <div>{entry.Description}</div>
                <div>{entry.API}</div>
              </div>
            </div>
          ))}
      </div>
      <Modal
        show={showDetails.show}
        onHide={() => setShowDetails({ ...showDetails, show: false })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Selected Entry Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-4 text-center">
            <div className="mb-2">
              Category : {showDetails.entryDetails.Category}
            </div>
            <div className="mb-2 text-center">
              Description : {showDetails.entryDetails.Description}
            </div>
            <div className="mb-2">API : {showDetails.entryDetails.API}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDetails({ ...showDetails, show: false })}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Entries;
