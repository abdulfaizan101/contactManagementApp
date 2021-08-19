import React, { useState, useRef, useEffect } from 'react';
import SimpleReactValidator from 'simple-react-validator';

import './App.css';


function Nav({ page }) {
  return (<>
    <aside>
      <ul>
        <li><a >Link 1</a></li>
        <li><a >Link 2</a></li>
      </ul>
    </aside>
    <div className="my-navbar">
      <div className="hamburger" id="nav-icon1">
        <span />
        <span />
        <span />
      </div>
      <h2 className="float-start">Contact</h2>
      {page === 1 ? <MainPageNavPart /> : ''}
    </div>
  </>);
}

function MainPageNavPart() {
  return (
    <div className="d-flex justify-content-between top-links-row">
      <a ><img src="assets/images/qr-code.svg" alt="" /></a>
      <a ><i className="bi bi-search" /></a>
      <div className="dropdown">
        <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-three-dots-vertical" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" >Action</a></li>
          <li><a className="dropdown-item" >Another action</a></li>
          <li><a className="dropdown-item">Something else here</a></li>
        </ul>
      </div>
    </div>);
}

function ViewProfile({ setPage, setViewProf, viewProf, setSetAllContact, allContact }) {

  let allList = allContact.sort((a, b) => a.priority > b.priority && 1 || -1)
  const edit = (id) => {
    setViewProf(allContact.filter((s) => s.id == id)[0]);
    setPage(3)
  }
  const delet = (id) => {
    for (var i = 0; i < allContact.length; i++) {
      if (allContact[i].id === id) {
        allContact.splice(i, 1);
        break;
      }
    }
    setSetAllContact([...allContact])
    // setPage(2)
  }
  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }

  const onDragOver = (ev) => {
    ev.preventDefault();
  }

  console.log('allContact111111', allContact);
  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id") * 1;
    // console.log('allContact', allContact);
    if (id != cat) {
      let li = [...allContact];
      let list = [...allContact];
      let bigCities1 = li.filter(function (e) {
        return e.priority == id;
      });
      let bigCities2 = list.filter(function (e) {
        return e.priority == cat;
      });

      let big = allContact.filter(function (e) {
        return e.priority != cat && e.priority != id;
      });
      // console.log('bigCities1', bigCities1, cat);
      let a = [...big, { ...bigCities1[0], 'priority': cat + '' }, { ...bigCities2[0], 'priority': id + '' }]
      console.log('aaaaaa', a);
      setSetAllContact([...a])

    }
  }
  return (<>
    {allList.map((a, i) => {
      let dis = a && a.discription != null ? a.discription : '';
      let num = a && a.name != null ? a.name : '';
      let priority = a && a.priority != null ? a.priority : '';
      let id = a && a.id != null ? a.id : '';
      return <div key={id}
        onDragOver={(e) => onDragOver(e)} onDrop={(e) => { onDrop(e, priority) }}
        onDragStart={(e) => onDragStart(e, priority)}
        draggable className="my-card">
        <h4>Description: {dis}</h4>
        <h4>Phone Number: <a className={"tel:" + num}>{num}</a> </h4>
        <h4>Priority: {priority}</h4>

        <div className="btn-row d-flex justify-content-between">
          <button className="btn btn-link" onClick={() => { delet(id) }}>DELETE</button>
          <button className="btn btn-link" onClick={() => { edit(id) }}>EDIT</button>
        </div>
        {/* <p className="text-end mb-0"><a onClick={edit} className="btn btn-link"> EDIT</a></p> */}
      </div>
    })}
  </>);
}

function AddProfile({ page, setPage, setSetAllContact, allContact, viewProf }) {
  let [contact, setContact] = useState({ name: '', discription: '' });
  const [ButtonDisabled, setButtonDisabled] = useState({ buttonDisabled: true });
  const validator = useRef(new SimpleReactValidator())
  useEffect(() => {
    if (validator.current.allValid()) {
      setButtonDisabled({ buttonDisabled: false });
    } else {
      setButtonDisabled({ buttonDisabled: true });
    }
  }, [contact])
  useEffect(() => {
    if (viewProf && viewProf.name != null) {
      setContact({ ...viewProf });
    }
  }, [])
  const validate = (val) => {
    setContact({ ...contact, [val.target.name]: val.target.value });
    validator.current.showMessageFor(val.target.name);
  }

  const cancel = (event) => {
    event.preventDefault();
    setPage(1)
  }

  const add = (event) => {
    event.preventDefault();

    if (viewProf && viewProf.name != null) {
      for (var i = 0; i < allContact.length; i++) {
        if (allContact[i].id === viewProf.id) {
          allContact.splice(i, 1);
          break;
        }
      }
      setSetAllContact([...allContact, { ...contact, priority: viewProf.priority, id: viewProf.id }])
    } else {
      let pre = allContact.length > 0 ? parseInt(allContact[(allContact.length - 1)].priority) + 1 : 1;
      setSetAllContact([...allContact, { ...contact, priority: pre, id: (allContact.length + 1) }])
    }
    if (page != 4) {
      setPage(1)
    }
    if (page === 4) {
      setContact({ name: '', discription: '' });
    }
  }
  return (<><div className="my-card">
    <form>
      <div className="input-group-fix">
        <div className="form-floating">
          <input type="text" className="form-control" name="name" id="floatingInput" onChange={validate} value={contact.name} placeholder="Phone number" />
          <label htmlFor="floatingInput">Phone number</label>
          <div className="form-group" style={{ color: 'red' }}>
            {validator.current.message('name', contact.name, 'required|phone')}
          </div>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" name="discription" id="floatingPassword" onChange={validate} value={contact.discription} placeholder="Description" />
          <label htmlFor="floatingPassword">Description</label>
          <div className="form-group" style={{ color: 'red' }}>
            {validator.current.message('discription', contact.discription, 'required|alpha')}
          </div>
        </div>
        {/* <div className="form-floating">
          <input type="text" className="form-control" id="floatingPassword" placeholder="Priority" />
          <label htmlFor="floatingPassword">Priority</label>
        </div> */}
      </div>
      <div className="btn-row d-flex justify-content-between">
        <button className="btn btn-link" onClick={cancel}  >CANCEL</button>
        <button className="btn btn-link" onClick={add} disabled={ButtonDisabled.buttonDisabled}>SUBMIT</button>
      </div>
    </form>
  </div></>);
}


function ContactList({ page, setPage, allContact, setId }) {
  const setPg = () => {
    setPage(3);
  }
  const profileView = (id) => {
    setId(id)
    setPage(2);
  }


  function ContactLst() {
    let allList = allContact.sort((a, b) => a.discription.toUpperCase() > b.discription.toUpperCase() && 1 || -1)
    let firstChar = '';
    let prevChar = '';
    let arr = [];
    let arrP = [];
    let a = allList.map((singleItem, index) => {
      firstChar = singleItem.discription.charAt(0).toUpperCase();
      return (<div key={index} className="contact" onClick={() => { profileView(singleItem.id) }}>
        <div className="letter color2">{firstChar}</div>
        <p>{singleItem.discription}</p>
      </div>);
    });
    firstChar = '';
    for (let i = 0; i < allList.length; i++) {
      firstChar = allList[i].discription.charAt(0).toUpperCase();
      if (i === (allList.length - 1)) {
        if (firstChar != prevChar) {
          arrP.push(<div className="contact-block" key={prevChar}><p><b>{prevChar}</b></p>{arr}</div>)
          arrP.push(<div className="contact-block" key={firstChar}><p><b>{firstChar}</b></p>{a[i]}</div>)
          break;
        }

        firstChar = '1'
        arr.push(a[i]);
      }
      if (firstChar != prevChar && firstChar != '' && prevChar != '') {
        let div = <div className="contact-block" key={prevChar}><p><b>{prevChar}</b></p>{arr}</div>
        arrP.push(div)
        arr = [];
      }
      arr.push(a[i]);
      prevChar = allList[i].discription.charAt(0).toUpperCase();
    }
    return arrP;
  }
  return (<div className="contact-container">
    <div className="contact-block">
      <p><b>What's new</b></p>
      <div className="contact">
        <div className="letter color1"><i className="bi bi-person" /></div>
        <p>Try sharing your profile </p>
      </div>
    </div>
    {ContactLst()}
    <div className="fixed-row" style={{ width: '800px' }}>
      <a onClick={setPg} className="float-end"><i className="bi bi-plus-circle-fill" /></a>
    </div>
  </div>);
}

function EmergencyContacts({ page, setViewProf, setPage, setId, setSetAllContact, allContact, viewProf }) {
  const setPg = (id) => {
    setPage(id)
  }
  return (<><h2 className="main-heading">Emergency contacts</h2>
    {page === 2 ? <ViewProfile setViewProf={setViewProf} setPage={setPage} setId={setId} setSetAllContact={setSetAllContact} allContact={allContact} viewProf={viewProf} /> : ''}
    {page === 3 ? <AddProfile page={page} setPage={setPage} setSetAllContact={setSetAllContact} allContact={allContact} viewProf={viewProf} /> : ''}
    {page === 4
      ? <>
        <ViewProfile setViewProf={setViewProf} setPage={setPage} setId={setId} setSetAllContact={setSetAllContact} allContact={allContact} viewProf={viewProf} />
        <AddProfile page={page} setPage={setPage} setSetAllContact={setSetAllContact} allContact={allContact} /> </>
      : ''}

    {page != 4 && page != 3 ? <p className="text-center my-5"><a onClick={() => { setPg(4) }} className="text-blue">ADD CONTACT</a></p> : ''}
    <p className="text-center my-5"><a onClick={() => { setPg(1) }} className="text-blue">BACK TO PROFILE</a></p></>
  );
}

function ContactManagement({ page, setPage, setContactId, setViewProf, setSetAllContact, allContact, viewProf }) {
  return (<>
    <div className="wrapper">
      <div className="container">
        <Nav page={page} />
        <div className="main-container">
          {page === 1 ? <ContactList setPage={setPage} allContact={allContact} setId={setContactId} /> : ''}
          {page === 2 || page === 3 || page === 4 ? <EmergencyContacts setViewProf={setViewProf} setSetAllContact={setSetAllContact} viewProf={viewProf} allContact={allContact} setPage={setPage} page={page} setId={setContactId} /> : ''}
        </div>
      </div>
    </div></>);
}



function App() {
  let [page, setPage] = useState(1);
  let [contactId, setContactId] = useState(null);
  let [viewProf, setViewProf] = useState(null);
  let [allContact, setSetAllContact] = useState([
    // { name: '+92324240311', discription: 'Dad', priority: '1', id: 1 },
    // { name: '+92324240322', discription: 'Mom', priority: '2', id: 2 },
    // { name: '+92324240344', discription: 'cbdul', priority: '3', id: 3 },
    // { name: '+92324240344', discription: 'dbdul', priority: '4', id: 4 },
    // { name: '+92324240344', discription: 'ebdul', priority: '5', id: 5 },
    // { name: '+92324240344', discription: 'fbdul', priority: '6', id: 6 },
    // { name: '+92324240344', discription: 'gbdul', priority: '7', id: 7 },
    // { name: '+92324240344', discription: 'hcdul', priority: '8', id: 8 }
  ]);
  useEffect(() => {
    setViewProf(allContact.filter((s) => s.id == contactId)[0]);
  }, [contactId])
  useEffect(() => {
    if (page == 1) {
      setViewProf({});
      setContactId(null);
    }
  }, [page])

  return (<ContactManagement setViewProf={setViewProf} allContact={allContact} viewProf={viewProf} setSetAllContact={setSetAllContact} page={page} setPage={setPage} contactId={contactId} setContactId={setContactId} />
  );
}

export default App;
