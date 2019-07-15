import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import Login from "../component/login";
import List from "../component/list";
import ItemDetail from "../component/itemDetail";

const AppStack = createStackNavigator({Home: List, detail: ItemDetail})
const AuthStack = createStackNavigator({ Login: Login })

const AppSwitchNavigator = createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default AppNavigator