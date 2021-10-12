import React, { useState } from 'react';
import {

    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    ScrollView,
    Picker
} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';



const newBuyer = ({ navigation }) => {


    const [merchant, onChangeMerchant] = useState("");
    const [selectedValue, setSelectedValue] = useState("java");
    const [checked, setChecked] = useState('first');
    const [driverName, onChangeDriverName] = useState('');
    const [carLong, onChangeCarLong] = useState('');
    const [carShort, onChangeCarShort] = useState('');
    const [quantity, onChangeQuantity] = useState('');
    const [wages, onChangeWages] = useState('');
    const [empty, onChangeEmpty] = useState('');
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.listed}>
                <Text style={styles.text}>أسم التاجر :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeMerchant}
                    value={merchant}
                    placeholder="اسم التاجر"
                    keyboardType="default"
                />

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>اسم السائق  :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDriverName}
                    value={driverName}
                    placeholder="اسم السائق"
                    keyboardType="default"
                />

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>رقم السيارة:</Text>
                <TextInput
                    style={styles.input2}
                    onChangeText={onChangeCarLong}
                    value={carLong}
                    placeholder="رقم السيارة"
                    keyboardType={'numeric'}
                    maxLength={5}
                />
                <Text style={styles.text}>-</Text>
                <TextInput
                    style={styles.input3}
                    onChangeText={onChangeCarShort}
                    value={carShort}
                    placeholder="ترميز السيارة"
                    keyboardType="numeric"
                    maxLength={2}
                />

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>الصنف :</Text>

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>


            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>شكل البضاعة :</Text>

                <RadioButton
                    value="وزن"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text style={styles.text}>وزن</Text>

                <RadioButton
                    value="عبوة"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
                <Text style={styles.text}>عبوة</Text>

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>الكمية:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeQuantity}
                    value={quantity}
                    placeholder="الكمية"
                    keyboardType="numeric"
                />

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>أجور:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeWages}
                    value={wages}
                    placeholder="أجور"
                    keyboardType="numeric"
                />

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>فارغ:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmpty}
                    value={empty}
                    placeholder="فارغ"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.listed}>
                <Button color="#0091EA" mode="contained" onPress={() => console.log('Pressed')}>
                    حفظ
                </Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: '70%',
        fontSize: 18,

    },
    input2: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: '50%',
        fontSize: 18,

    },
    input3: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: '20%',
        fontSize: 18,

    },
    scrollView: {
        marginHorizontal: 20,
    },
    listed: { flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: "row", fontSize: 45, margin: 15 },
    text: {
        fontSize: 22,
    },
});

export default newBuyer;

