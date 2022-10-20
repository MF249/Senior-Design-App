import AuthNavigator from "./authNavigator";
import HomeNavigator from "./homeNavigator";
import LoadingScreen from "../components/loadingScreen";
import { useLogin } from "../contexts/loginProvider";

const MainNavigator = () => {
    const { isLoggedIn, isLoading } = useLogin();

    if (isLoading) {
        return <LoadingScreen />;
    }

    return isLoggedIn ? <HomeNavigator /> : <AuthNavigator />;
};

export default MainNavigator;