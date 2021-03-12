import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { IndexRoute } from './routes/index-route'
import { PatientHomePage } from './routes/patient-route'
import { NotFoundRoute } from './routes/not-found-route'
import { EditPatientHomePage } from './routes/patient-edit-route'

export const Routes: React.FC = () => {
  //   const Routes = { Patient: (id: number) => `/patient/${id}` }
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact={true} to="/index" />
        <Route path="/index" component={IndexRoute} />
        <Route path="/patient/:id/edit" component={EditPatientHomePage} />
        <Route path="/patient/:id" component={PatientHomePage} />

        <NotFoundRoute />
      </Switch>
    </Router>
  )
}
