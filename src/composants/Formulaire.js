import React from 'react';
import { useState } from 'react';

const Formulaire = () => {
    const longueurMax = 130;
    const [ContenuSaisi, setContenuSaisi] = useState('');
    const [reste, setReste] = useState(longueurMax);


    const handleChange = (e)=>{
    setContenuSaisi(e.target.value)
    setReste(longueurMax - ContenuSaisi.length)
    }
  return (
    <div>
      <h2 > FORMULAIRE</h2>

      <form className='container text-center'>
      <div class="mb-3">
            <label className="form-label mt-4" >Titre</label>
            <input type="text" className='form-control'></input>
            <div><p> Merci de donner un titre clair pour la Catégorisation</p></div>
        </div>
        <div class="mb-3">
            <label className="form-label mt-4">Suggestion</label>
            <textarea  className='form-control' onChange={handleChange}></textarea>
        </div>
        <p style = {{color: (reste < 0) ? "red" : "green"}} id='text-limite'>Contenu Saisi {ContenuSaisi.length} /130</p>
        <p id='text-restant'>il vous reste {reste}</p>
        <button type="submit" class="btn btn-danger">Submit</button>
    </form>

    </div>
  );
}

export default Formulaire;
