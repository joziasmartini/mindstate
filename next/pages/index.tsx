import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css/" />
        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet" />
      </Head>

      <main classNameName={styles.app}>
        <nav id="profileNavbar">
          <p><i classNameName="las la-chevron-left"></i></p>
          <p>Meu Perfil</p>
          <p><i classNameName="las la-ellipsis-h"></i></p>
        </nav>

        <div id="profilePicture">
          <i className="profileIcon las la-user"></i>
          <div id="profileBox">
            <p className="profileName">Nome Sobrenome</p>
            <p className="profileUser">@seuusuario</p>
          </div>
        </div>

        <div>
          <ul id="configList">
            <li><i className="las la-credit-card configIcon"></i>Assinatura</li>
            <li><i className="las la-info configIcon"></i>Informações</li>
            <li><i className="las la-tasks configIcon"></i>Progresso</li>
            <li><i className="las la-folder-open configIcon"></i>Salvos</li>
            <li><i className="las la-bell configIcon"></i>Notificações</li>
            <li><i className="las la-user-shield configIcon"></i>Privacidade</li>
            <li><i className="las la-cog configIcon"></i>Configurações</li>
          </ul>
        </div>

        <footer>
          <p>Developed by</p>
          <i className="las la-leaf"></i>
          <p>Timely</p>
        </footer>
      </main>
    </div>
  )
}
