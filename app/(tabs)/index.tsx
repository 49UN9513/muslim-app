import { useEffect, useState } from "react"
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, StatusBar } from "react-native"
import { fetchSurah } from "@/utils/fetch"
import { Surah, SurahType } from "@/types/quran"
import Navbar from "@/components/Navbar"

const Home = () => {
  const [surahs, setSurahs] = useState<Surah[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        const data = await fetchSurah()
        if (Array.isArray(data)) {
          setSurahs(data)
        } else {
          setError("Data format tidak sesuai")
        }
      } catch (err: any) {
        console.error(err)
        setError("Gagal mengambil data surah. Silakan coba lagi nanti.")
      } finally {
        setLoading(false)
      }
    }

    loadSurahs()
  }, [])

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2D6A4F" />
        <Text style={{ marginTop: 10 }}>Memuat surah...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
      </View>
    )
  }

  return (
    <View>
      <Navbar title="Surah" />
      <ScrollView contentContainerStyle={styles.container}>

        {surahs.map((surah) => (
          <View key={surah.id} style={styles.card}>
            <Text>{surah.title}</Text>
            <Text style={styles.titleArabic}>{surah.title_ar}</Text>
            <Text style={styles.titleLatin}>{surah.title_id}</Text>
            <Text style={styles.detail}>
              {surah.total_verses} ayat • {surah.type === SurahType.MECCAN ? "Makkiyah" : "Madaniyah"}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F0F4F8",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1B4332",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titleArabic: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
    color: "#2D6A4F",
  },
  titleLatin: {
    fontSize: 18,
    marginTop: 5,
    color: "#40916C",
  },
  detail: {
    marginTop: 5,
    color: "#6C757D",
    fontSize: 14,
  },
})

export default Home
