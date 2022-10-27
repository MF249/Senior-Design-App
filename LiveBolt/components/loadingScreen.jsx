import { ScrollView, StyleSheet } from 'react-native';

function LoadingScreen() {
    
    return (
        <ScrollView contentContainerStyle={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#144C81',
    },
});

export default LoadingScreen;