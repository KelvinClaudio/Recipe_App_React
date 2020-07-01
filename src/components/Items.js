import React from "react";
import Modal from "react-modal";
import uniqid from "uniqid";

const customStyles = {
   content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "70vw",
      maxHeight: "70%",
      transform: "translate(-50%, -50%)",
      transition: "200ms linear",
      overflow: "auto",
   },
};

Modal.setAppElement("#root");

const Item = ({ title, image, label, ingredients }) => {
   const [modalIsOpen, setIsOpen] = React.useState(false);
   function openModal() {
      setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
   }
   return (
      <div class="card mt-5">
         <img class="card-img-top" src={image} alt={title} />
         <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <hr />
            {label.map(e => (
               <p
                  key={uniqid()}
                  style={{
                     display: "inline",
                     margin: "0 5px",
                     textDecoration: "underline",
                     fontSize: "1rem",
                  }}
               >
                  {e}
               </p>
            ))}
         </div>
         <div class="card-footer">
            <button href="#" onClick={openModal} class="btn btn-primary">
               Full Recipe
            </button>
            <Modal
               isOpen={modalIsOpen}
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Example Modal"
            >
               <div style={{ display: "flex" }}>
                  <img
                     class="card-img-top mr-5"
                     style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                     }}
                     src={image}
                     alt={title}
                  />
                  <section style={{}}>
                     <h2>{title}</h2>
                     <ul className="mt-3">
                        {ingredients.map((ing, index) => {
                           return <li key={index}>{ing}</li>;
                        })}
                     </ul>
                  </section>
               </div>
            </Modal>
         </div>
      </div>
   );
};
export default Item;
