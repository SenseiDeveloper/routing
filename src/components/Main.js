import React from 'react';
import { Switch, Route ,Redirect} from 'react-router-dom';
import {Home} from '../pages/Home';
import {Posts} from '../pages/Posts';
import {Contacts} from '../pages/Contacts';
import {PostData} from '../pages/PostData';

export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/post' component={ Posts }/>
                <Route  path='/post/:id' component={ PostData}/>
                <Route path='/contacts' component={ Contacts }/>
                <Redirect from="*" to="/" />
            </Switch>
        </main>
    )
}
