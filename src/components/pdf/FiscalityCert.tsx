/* eslint-disable jsx-a11y/alt-text */
'use client';

import { MemberCertificate } from '@/lib/types';
import { formatNationalNumber } from '@/lib/utils';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const FiscalityCert = ({
  parents,
  camps,
  address,
  firstname,
  lastname,
  nationalNumber,
  id,
}: MemberCertificate) => {
  const totalAmount = camps.reduce((acc, camp) => acc + camp.amoutReceived, 0);
  return (
    <Document
      title={`Fiscaal attest - Scouts Ter Alwina - ${firstname} ${lastname}`}
      author='Scouts Ter Alwina'
      subject='Fiscaal attest'
      creator='Scouts Ter Alwina'
      producer='Scouts Ter Alwina'
      language='nlBE'>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            ATTEST NR. 281.96 (JAAR VAN UITGAVEN 2024)
          </Text>
          <Text style={styles.subtitle}>
            Dit attest geldt als jaarlijks attest uitgereikt overeenkomstig
            artikel 6318/8, van het koninklijk besluit tot uitvoering van het
            Wetboek van de inkomstenbelastingen 1992 (KB/WIB 92), met het oog op
            de toekenning van de belastingvermindering voor kinderoppas (1)
          </Text>
        </View>
        <View style={styles.section}>
          <View
            style={{
              flexDirection: 'column',
              paddingLeft: 30,
              paddingVertical: 10,
            }}>
            <Text>
              Naam van de instantie of de persoon (hierna ‘de instantie’) die
              instaat voor de opvang (2):
            </Text>
            <Text>Scouts Ter Alwina - Scouts en gidsen Vlaanderen O2320G</Text>
            <Text>KBO nr. (facultatief)</Text>
            <Text>Straat: Driesstraat 7a</Text>
            <Text>Postcode: 1790</Text>
            <Text>Gemeente: Affligem</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
            <Text>
              Vak I (dit vak moet niet altijd worden aangevuld - zie bericht)
            </Text>
            <Text>
              De instatie die instaat voor de opvang verklaart dat zijn
              (aankruisen wat van toepassing is):
            </Text>
            <Text>
              ( ) is vergund, erkend, gesubsidieerd of gecontroleerd door of
              onder toezicht staat van of een kwaliteitslabel heeft ontvangen
              van Kind en Gezin / Opgroeien regie, het ‘Office de la Naissance
              et de l’Enfance’ of de regering van de Duitstalige Gemeenschap.
            </Text>
            <Text>
              (x) is vergund, erkend, gesubsidieerd of gecontroleerd door de
              lokale openbare besturen of openbare besturen van de
              gemeenschappen of gewesten.
            </Text>
            <Text>
              ( ) is vergund, erkend, gesubsidieerd of gecontroleerd door of
              onder toezicht staat van buitenlandse openbare instellingen
              gevestigd in een andere lidstaat van de Europese Economische
              Ruimte
            </Text>
            <Text>
              ( ) is verbonden met een school gevestigd in de Europese
              Economische Ruimte of met de inrichtende macht van een school
              gevestigd in de Europese Economische Ruimte.
            </Text>
            <Text>
              in de zin van art. 14535, tweede lid, 3°, van het Wetboek van de
              inkomstenbelastingen 1992. Wat hiervoor is verklaard, is geldig
              voor de periode van … / … / 20… tot … / … / 20 …(3)
            </Text>
            <Text>
              Naam en volledig adres van de ‘certificeringsinstantie’ (4) die de
              opvanginstantie heeft vergund, erkend, gesubsidieerd, er een
              kwaliteitslabel heeft aan toegekend of die deze controleert of er
              toezicht op houdt of die is verbonden met de opvanginstantie in
              het geval van scholen of hun inrichtende machten:
            </Text>
            <View
              style={{
                flexDirection: 'column',
                paddingLeft: 30,
                paddingVertical: 10,
              }}>
              <Text>Naam: Lokaal bestuur Affligem</Text>
              <Text>KBO nr. (facultatief)</Text>
              <Text>Straat: Bellestrat 99</Text>
              <Text>Postcode: 1790</Text>
              <Text>Gemeente: Affligem</Text>
            </View>
          </View>
        </View>
      </Page>
      <Page size='A4' style={styles.page}>
        <View
          style={{
            border: '1px solid #000',
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}>
          <View>
            <Text style={{ textDecoration: 'underline' }}>Vak II</Text>
          </View>
          <View>
            <Text>1. Volgnummer van het attest: {id}</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Text>
              2. Gegevens van de schuldenaar van de uitgaven voor kinderoppas:
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 30,
                gap: 5,
              }}>
              <Text>Naam: {parents[0].lastname}</Text>
              <Text>Voornaam: {parents[0].firstname}</Text>
              <Text>
                Identificatienummer van get Rijksregister of KSZ:{' '}
                {formatNationalNumber(parents[0].nationalNumber)}
              </Text>
              <Text>Adres: {address?.street}</Text>
              <Text>Nr: {address?.houseNumber}</Text>
              <Text>Postocde: {address?.zipcode}</Text>
              <Text>Gemeente: {address?.city}</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Text>3. Gegevens van het kind</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 30,
                gap: 5,
              }}>
              <Text>Naam: {firstname}</Text>
              <Text>Voornaam: {lastname}</Text>
              <Text>
                Identificatienummer van get Rijksregister of KSZ:{' '}
                {formatNationalNumber(nationalNumber)}
              </Text>
              <Text>Adres: {address?.street}</Text>
              <Text>Nr: {address?.houseNumber}</Text>
              <Text>Postocde: {address?.zipcode}</Text>
              <Text>Gemeente: {address?.city}</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Text>4. Periode waarin het kind is opgevangen (5):</Text>
            <View style={{ paddingLeft: 30 }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <View style={styles.tablecell}>
                  <Text style={styles.tabledata}>Periode</Text>
                </View>
                <View style={styles.tablecell}>
                  <Text style={styles.tabledata}>Datum</Text>
                </View>
                <View style={styles.tablecell}>
                  <Text style={styles.tabledata}>Aantal dagen</Text>
                </View>
                <View style={styles.tablecell}>
                  <Text style={styles.tabledata}>Dagtarief (6)</Text>
                </View>
                <View style={styles.tablecell}>
                  <Text style={styles.tabledata}>Ontvangen bedrag</Text>
                </View>
              </View>
              {camps.map((camp) => (
                <View
                  key={camp.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View style={styles.tablecell}>
                    <Text style={styles.tabledata}>{camp.name}</Text>
                  </View>
                  <View style={styles.tablecell}>
                    <Text style={styles.tabledata}>
                      {camp.startDate.toLocaleDateString('NL')} -{' '}
                      {camp.endDate.toLocaleDateString('NL')}
                    </Text>
                  </View>
                  <View style={styles.tablecell}>
                    <Text style={styles.tabledata}>{camp.totalDays}</Text>
                  </View>
                  <View style={styles.tablecell}>
                    <Text style={styles.tabledata}>{camp.dailyCost}</Text>
                  </View>
                  <View style={styles.tablecell}>
                    <Text style={styles.tabledata}>{camp.amoutReceived}</Text>
                  </View>
                </View>
              ))}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '80%',
                    paddingVertical: 5,
                    border: '1px solid #000',
                  }}>
                  <Text style={styles.tabledata}>Totaal</Text>
                </View>
                <View style={styles.tablecell}>
                  <Text style={styles.tabledata}>{`${totalAmount} €`}</Text>
                </View>
              </View>
            </View>
          </View>
          <Text>
            Ondergetekende bevestigt de juistheid van de hierboven vermelde
            inlichtingen.
          </Text>
          <Text>Gedaan te Affligem, 22/01/2024</Text>
          <Text>
            Persoon die gemachtigd is de opvanginstantie of persoon die instaat
            voor de opvang (2) te verbinden (7).
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              paddingLeft: 30,
            }}>
            <Text>Naam: Joeri Leupe</Text>
            <Text>Hoedanigheid: Financieel Verantwoordelijke</Text>
            <Text>Handtekening</Text>
            <Image
              src={'/img/signature-joeri.jpg'}
              style={{ width: 100, height: 100 }}
              fixed
              cache
            />
          </View>
        </View>
      </Page>
      <Page size='A4' style={styles.page}>
        <View>
          <Text style={{ textDecoration: 'underline' }}>Verduidelijkingen</Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <Text>(1)</Text>
          <Text style={{}}>
            Dit attest, dat slechts in één exemplaar moet worden ingevuld, moet
            ter beschikking gehouden worden van de administratie door de
            schuldenaar van de uitgaven voor kinderoppas. De schuldenaar is de
            persoon die normaal gezien gehouden is tot de betaling van de
            uitgaven voor kinderoppas en die de uitgaven betaalt of draagt. De
            schuldenaar die op het attest wordt vermeld, zal enkel recht hebben
            op de belastingvermindering indien hij het kind fiscaal ten laste
            heeft of indien hij de helft van het fiscaal voordeel voor kinderen
            ten laste krijgt (fiscaal co-ouderschap), en indien ook aan alle
            andere wettelijke voorwaarden is voldaan.
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <Text>(2)</Text>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>Het gaat om:</Text>
            <Text>
              - de instelling, de opvangvoorziening, het kinderdagverblijf, het
              onthaalgezin, de school, gevestigd in de Europese Economische
              Ruimte
            </Text>
            <Text>
              - de inrichtende macht van de school gevestigd in de Europese
              Economische Ruimte
            </Text>
            <Text>
              - het lokale openbare bestuur, het openbare bestuur van de
              gemeenschap of het gewest
            </Text>
            <Text>
              - de buitenlandse openbare instelling gevestigd in een andere
              lidstaat van de Europese Economische Ruimte
            </Text>
            <Text>
              - de organisatie gevestigd in de Europese Economische Ruimte die
              thuisopvang voor zieke kinderen door professionele oppassers
              organiseert
            </Text>
            <Text>
              - de zelfstandige oppasser die een ziek kind oppast in het kader
              van de beroepsactiviteit die hij/zij uitoefent in de Europese
              Economische Ruimte.
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <Text>(3)</Text>
          <Text>
            Enkel in te vullen wanneer de instantie die instaat voor de opvang
            slechts gedurende een deel van het jaar waarvoor het attest wordt
            opgesteld is vergund, erkend, gesubsidieerd,…
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <Text>(4)</Text>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>Het gaat om:</Text>
            <Text>
              - ofwel Kind en Gezin / Opgroeien regie of het ‘Office de la
              Naissance et de l’Enfance’ of de regering van de Duitstalige
              Gemeenschap
            </Text>
            <Text>
              ofwel de lokale openbare besturen of openbare besturen van de
              gemeenschappen of de gewesten
            </Text>
            <Text>
              - ofwel buitenlandse openbare instellingen gevestigd in een andere
              lidstaat van de Europese Economische Ruimte
            </Text>
            <Text>
              - ofwel de school gevestigd in de Europese Economische Ruimte of
              de inrichtende macht van de school gevestigd in de Europese
              Economische Ruimte waaraan instellingen of opvangvoorzieningen
              zijn verbonden.
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <Text>(5)</Text>
          <Text>
            De op het attest vermelde gegevens mogen enkel betrekking hebben op
            het gedeelte van het jaar dat de 14e verjaardag van het kind, of de
            21e verjaardag van het kind met een zware handicap, voorafgaat.
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <Text>(6)</Text>
          <Text>
            Indien meerdere tarieven van toepassing zijn, moet een detail van
            het aantal opvangdagen per tarief worden verstrekt. Het dagtarief
            moet evenwel alleen worden ingevuld indien het maximumbedrag per
            oppasdag wordt overschreden. Dit bedrag wordt geïndexeerd.
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <Text>(7)</Text>
          <Text>
            Indien gevolmachtigde, de handtekening laten voorafgaan door ‘bij
            volmacht’. De handtekening is niet verplicht voor de elektronische
            verzending van een kopie naar de administratie via de toepassing
            Belcotax-on-web, aangezien de gebruiker zich moet registreren om de
            toepassing te gebruiken.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default FiscalityCert;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  section: {
    border: '1px solid #000',
    paddingVertical: 10,
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    textDecoration: 'underline',
  },
  subtitle: {
    fontSize: 9,
    textAlign: 'center',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  tablecell: {
    width: '20%',
    paddingVertical: 5,
    border: '1px solid #000',
  },
  tabledata: {
    textAlign: 'center',
  },
});
