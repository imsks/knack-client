import { Switch, Route } from "react-router-dom";

import { appRoutes } from "../../containers/routes";
import Homepage from "../../pages/Homepage";
import CreateSurvey from "../../pages/survey/create";


const AppRoutes = () => {
  return (
    <Switch>
      <Route path={appRoutes.homepage} exact component={Homepage} />
      <Route path={appRoutes.createSurvey} exact component={CreateSurvey} />
    </Switch>
  );
};

export default AppRoutes;
