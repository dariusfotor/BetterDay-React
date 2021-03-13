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

export const ROUTES = {
  PatientsList: () => `/index`,
  Patient: (id: number | string) => `/patient/${id}`,
  PatientEdit: (id: number | string) => `/patient/${id}/edit`,
}

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact={true} to="/index" />
        <Route path={ROUTES.PatientsList()} component={IndexRoute} />
        <Route
          path={ROUTES.PatientEdit(':id')}
          component={EditPatientHomePage}
        />
        <Route path={ROUTES.Patient(':id')} component={PatientHomePage} />

        <NotFoundRoute />
      </Switch>
    </Router>
  )
}
