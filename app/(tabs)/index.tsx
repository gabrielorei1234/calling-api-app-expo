import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* Boas-vindas */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo(a) ao Gerador de Usuários!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Este aplicativo foi projetado para mostrar como você pode criar algo incrível usando
          React Native! Na aba ao lado, você encontrará um gerador de usuários aleatórios que utiliza
          a API do RandomUser. Explore e divirta-se! 🚀
        </ThemedText>
      </ThemedView>

      {/* Instruções para navegar */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">O que você pode fazer aqui:</ThemedText>
        <ThemedText>
          1. Aprender mais sobre desenvolvimento React Native. 🌟{'\n'}
          2. Descobrir como consumir APIs para criar funcionalidades dinâmicas. 🔄{'\n'}
          3. Na próxima aba, veja usuários gerados aleatoriamente e explore suas informações.
        </ThemedText>
      </ThemedView>

      {/* Dicas adicionais */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Dicas para sua jornada</ThemedText>
        <ThemedText>
          Pressione{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          para abrir as ferramentas de desenvolvedor e testar as funcionalidades. Boa exploração! 🎉
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
