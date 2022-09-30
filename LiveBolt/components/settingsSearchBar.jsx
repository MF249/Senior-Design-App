import { SearchBar } from 'react-native-elements';

function settingsSearchBar(){
    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
};

export default settingsSearchBar;