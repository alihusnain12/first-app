import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/header'
import ScreenWrapper from '../components/screenWrapper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from '../components/card'
import PayrollCard from '../components/payrollCard'
import VATCard from '../components/VATCard'
import CompanyCard from '../components/companyCard'

export default function Services() {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState("Self Assessment");

    return (
        <ScreenWrapper>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Header title="Select Services" />
            <View style={styles.tabContainer}>
                {["Self Assessment", "Payroll Tax", "VAT Returns","Company Tax"].map((tab) => (
                    <TouchableOpacity 
                        key={tab}
                        onPress={() => setActiveTab(tab)} // Change `onClick` to `onPress`
                        style={[styles.tab, activeTab === tab ? styles.activeTab : styles.inactiveTab]}
                    >
                        <Text style={[styles.tabText, activeTab === tab ? styles.activeTabText : styles.inactiveTabText]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{ marginTop: hp(5) }}>
                {activeTab === "Self Assessment" && (
                    <View>
                       <Card/>
                    </View>
                )}
                {activeTab === "Payroll Tax" && (
                    <View>
                        <PayrollCard/>
                    </View>
                )}
                {activeTab === "VAT Returns" && (
                   <VATCard/>
                )}
                {activeTab === "Company Tax" && (
                    <CompanyCard/>
                )}
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp(2),
    },
    tab: {
        padding: 10,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
    },
    inactiveTab: {
        borderBottomWidth: 0,
    },
    tabText: {
        fontSize: hp(1.3),
    },
    activeTabText: {
        color: 'blue',
    },
    inactiveTabText: {
        color: 'gray',
    },
});