import React, { useState } from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    ScrollView,
    Picker
} from 'react-native';
import { RadioButton } from 'react-native-paper';


const newBuyer = ({ navigation }) => {


    const [merchant, onChangeMerchant] = useState("");
    const [selectedValue, setSelectedValue] = useState("java");
    const [checked, setChecked] = useState('first');
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
                    onChangeText={onChangeMerchant}
                    value={merchant}
                    placeholder="اسم السائق"
                    keyboardType="default"
                />

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>رقم السيارة:</Text>
                <TextInput
                    style={styles.input2}
                    onChangeText={onChangeMerchant}
                    value={merchant}
                    placeholder="رقم السيارة"
                    keyboardType="numeric"
                    maxLength={5}
                />
                <Text style={styles.text}>-</Text>
                <TextInput
                    style={styles.input3}
                    onChangeText={onChangeMerchant}
                    value={merchant}
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
                    onChangeText={onChangeMerchant}
                    value={merchant}
                    placeholder="الكمية"
                    keyboardType="numeric"
                />

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>أجور:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeMerchant}
                    value={merchant}
                    placeholder="أجور"
                    keyboardType="numeric"
                />

            </View>
            <View style={styles.listed}>
                <Text style={styles.text}>فارغ:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeMerchant}
                    value={merchant}
                    placeholder="فارغ"
                    keyboardType="numeric"
                />
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

