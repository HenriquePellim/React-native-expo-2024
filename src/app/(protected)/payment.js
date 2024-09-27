import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Payment() {
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([{
        "id": 1,
        "nome": "Dionisio O'Shevlin"
    }, {
        "id": 2,
        "nome": "Curran Gobbet"
    }, {
        "id": 3,
        "nome": "Elberta Simonin"
    }, {
        "id": 4,
        "nome": "Adham Feek"
    }, {
        "id": 5,
        "nome": "Filmer Gravy"
    }, {
        "id": 6,
        "nome": "Putnam Swatridge"
    }, {
        "id": 7,
        "nome": "Mariann Georgi"
    }, {
        "id": 8,
        "nome": "Cynthy Margrett"
    }, {
        "id": 9,
        "nome": "Amalie China"
    }, {
        "id": 10,
        "nome": "Aube Tacon"
    }, {
        "id": 11,
        "nome": "Carmela Elcott"
    }, {
        "id": 12,
        "nome": "Brandice Burgoine"
    }, {
        "id": 13,
        "nome": "Willow Rosenbaum"
    }, {
        "id": 14,
        "nome": "Graig Puleque"
    }, {
        "id": 15,
        "nome": "Skylar Iddenden"
    }, {
        "id": 16,
        "nome": "Aline Slixby"
    }, {
        "id": 17,
        "nome": "Loleta Ordemann"
    }, {
        "id": 18,
        "nome": "Nils Giacopetti"
    }, {
        "id": 19,
        "nome": "Kara Yardley"
    }, {
        "id": 20,
        "nome": "Deeanne But"
    }, {
        "id": 21,
        "nome": "Georgie Haselup"
    }, {
        "id": 22,
        "nome": "Gwenneth Gathercoal"
    }, {
        "id": 23,
        "nome": "Israel Rudd"
    }, {
        "id": 24,
        "nome": "Sanson Pimme"
    }, {
        "id": 25,
        "nome": "Maxie Newbigging"
    }, {
        "id": 26,
        "nome": "Sabine Yearnsley"
    }, {
        "id": 27,
        "nome": "Lock Pithie"
    }, {
        "id": 28,
        "nome": "Nobe Brothers"
    }, {
        "id": 29,
        "nome": "Sherilyn Derry"
    }, {
        "id": 30,
        "nome": "Eyde Klimowski"
    }, {
        "id": 31,
        "nome": "Amelina Gilbard"
    }, {
        "id": 32,
        "nome": "Donny Glidden"
    }, {
        "id": 33,
        "nome": "Bernetta Braisted"
    }, {
        "id": 34,
        "nome": "Giustino Abbes"
    }, {
        "id": 35,
        "nome": "Pattie Paulat"
    }]);
    const [id, setId] = useState(1);
    const [data, setData] = useState(new Date());
    const [viewCalendar, setViewCalendar] = useState(false)
    const [observacao, setObservacao] = useState("");

    const handleCalendar = (event, selectedDate) => {
        setViewCalendar(false);
        setData(selectedDate);
    }

    return (
        <View style={styles.content}>
            <Text>Inserir Pagamentos</Text>
            <View style={styles.inputView}>
                <Ionicons name="wallet-outline" size={24} color="black" />
                <TextInput
                    placeholder="Valor"
                    keyboardType="decimal-pad"
                    style={styles.inputValor}
                    value={valor}
                    onChangeText={setValor}
                />
            </View>
            <View style={styles.inputView}>
                <Picker
                    selectedValue={id}
                    onValueChange={(itemValue, index) => {
                        setId(itemValue)
                    }}
                    style={{ width: "100%" }}
                >
                    {sugestoes?.map((item) => {
                        return <Picker.Item key={item.id} label={item.nome} value={item.id} />
                    })}
                </Picker>
            </View>
            <View style={styles.inputView}>
                <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
                    {data.toLocaleDateString().split("T")[0]}
                </Text>
                {viewCalendar && (
                    <DateTimePicker
                        value={data}
                        onChange={handleCalendar}
                        mode="date"
                        testID="dateTimePicker"
                    />
                )}
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Observações"
                    style={styles.inputObservacao}
                    value={observacao}
                    onChangeText={setObservacao}
                    multiline={true}
                />
            </View>
            <View style={styles.contentButton}>
                <Button title="Salvar" />
                <Button title="Continuar" />
                <Button title="Cancelar" onPress={() => router.back()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    inputView: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },
    contentButton: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around"

    },
    inputValor: {
        flex: 1,
        textAlign: "right",
        padding: 10,
    },
    inputData: {
        width: "100%",
        textAlign: "center",
        fontFamily: "regular",
        fontSize: 20,
        padding: 10,
    },
    inputObservacao: {
        fontFamily: "regular",
        fontSize: 16,
        flex: 1,
        lineHeight: 20,
    },
})