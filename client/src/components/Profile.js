import React, {useContext,useRef,useEffect} from 'react';
import styles from 'styled-components'
import AdviceContext from '../context/AdviceContext';
import AdviceList from '../components/Advice/AdviceList';

const userImg = require("../img/user_large.png");
const Container = styles.div`
   margin-top: 72px
`

export default function Profile() {
    const context = useContext(AdviceContext);
    const userData = JSON.parse(window.sessionStorage.getItem('user'));
    const ref = useRef()
  
    useEffect(() => { // ComponentDidMount
      context.loadUserAdvice();
      ref.current = true;
    }, []);

    return (
        <Container className="column col-sm-12 col-9 col-mx-auto">
            <div className="columns">
                <div className="column col-md-12 col-8 mb-2">
                    <div className="card" style={{padding: 24}}>
                        <div className="card-body">
                            <img className="float-left" style={{marginRight: 32}} width="84px" src={userImg}/>
                            <div>
                                <h2>
                                    {userData.firstname} {userData.lastname}
                                </h2>
                                <p>   {userData.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column col-md-6 col-2">
                    <div className="card" style={{padding: '16px 24px'}}>
                        <div className="card-body">
                            <div>
                                <p>Avis</p>
                                <h1>{context.userAdvice == undefined ? 0 : context.userAdvice.length}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column col-md-6 col-2">
                    <div className="card" style={{padding: '16px 24px'}}>
                        <div className="card-body">
                            <div>
                                <p>Liste</p>
                                <h1>4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: 32}}>
                <div style={{marginTop: 40}} className="divider"/>
                <h2 style={{marginTop: 40}}>Mes avis</h2>
                <AdviceList advices={context.userAdvice}/>
            </div>
        </Container>
    );
}