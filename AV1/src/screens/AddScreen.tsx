import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import MainLayout from "../layout/MainLayout";
import { HabitsContext } from "../context/HabitsContext";
import { addScreen } from "../styles/screens/addScreen";

export default function AdicionarScreen({ navigation }: any) {
  const { addHabit } = useContext(HabitsContext);

  return (
    <MainLayout>
      <View>
        <Text style={addScreen.subtitle}>Adicionar Hábito</Text>
        <Formik
          initialValues={{ nome: "" }}
          validationSchema={Yup.object({
            nome: Yup.string().required("Campo obrigatório"),
          })}
          onSubmit={(values, { resetForm }) => {
            addHabit(values.nome);
            resetForm();
            navigation.goBack();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                style={addScreen.input}
                placeholder="Digite o hábito"
                onChangeText={handleChange("nome")}
                onBlur={handleBlur("nome")}
                value={values.nome}
              />
              {touched.nome && errors.nome && (
                <Text style={addScreen.error}>{errors.nome}</Text>
              )}

              <TouchableOpacity style={addScreen.button} onPress={() => handleSubmit()}>
                <Text style={addScreen.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </MainLayout>
  );
}
