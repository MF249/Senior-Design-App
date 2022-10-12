import AuthNavigator from "./authNavigator";
import HomeNavigator from "./homeNavigator";
import LoadingScreen from "../components/loadingScreen";
import { useLogin } from "../contexts/loginProvider";

const MainNavigator = () => {
    const { userToken, isLoading } = useLogin();

    if (isLoading) {
        return <LoadingScreen />;
    }

    return userToken ? <HomeNavigator /> : <AuthNavigator />;
};

export default MainNavigator;