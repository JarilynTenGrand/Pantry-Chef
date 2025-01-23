import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import recipes from './recipes';

const App = () => {
  const [input, setInput] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = () => {
    const inputIngredients = input
      .split(',')
      .map(item => item.trim().toLowerCase());

    const matches = recipes.filter(recipe =>
      inputIngredients.every(inputIng =>
        recipe.ingredients.some(recipeIng =>
          recipeIng.toLowerCase().includes(inputIng),
        ),
      ),
    );
    setFilteredRecipes(matches);
  };

  const resetSearch = () => {
    setInput('');
    setFilteredRecipes([]);
  };

  const openModal = recipe => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pantry Chef</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter ingredients..."
        value={input}
        onChangeText={text => setInput(text)}
      />
      <View style={styles.buttons}>
        <Button title="Search" onPress={handleSearch} />
        <Button title="Reset" onPress={resetSearch} />
      </View>
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.recipeContainer}
            onPress={() => openModal(item)}>
            <Image
              source={item.image}
              style={styles.recipeImage}
              resizeMode="cover"
            />
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          input && filteredRecipes.length === 0 ? (
            <Text style={styles.noResults}>No recipes found!</Text>
          ) : null
        }
      />
      {/* Modal */}
      {selectedRecipe && (
        <Modal transparent={true} visible={showModal}>
          <View style={styles.centerView}>
            <View style={styles.modalView}>
              <Image
                source={selectedRecipe.image}
                style={styles.modalImage}
                resizeMode="cover"
              />
              <Text style={styles.modalTitle}>{selectedRecipe.name}</Text>
              <Text style={styles.modalSubTitle}>Ingredients:</Text>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.modalText}>
                  - {ingredient}
                </Text>
              ))}
              <Text style={styles.modalSubTitle}>Steps:</Text>
              {selectedRecipe.step.map((step, index) => (
                <Text key={index} style={styles.modalText}>
                  {index + 1}. {step}
                </Text>
              ))}
              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 18,
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    color: 'green',
  },
  recipeContainer: {
    backgroundColor: '#3063cf',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  noResults: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: 'black',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
