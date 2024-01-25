import Link from "next/link"
import Image from "next/image"
import '@/components/ui/header/header.scss';
import '@/static/styles/variables.scss'


export default function Header() {
  return (
    <>
      <header className="header">

        <div className="header__inner">

          <svg width="225" height="70" viewBox="0 0 225 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M87.5908 48.2902C85.5295 48.2902 83.5561 48.0011 81.6707 47.4229C79.7854 46.8196 78.2896 46.0528 77.1835 45.1227L78.8804 41.3143C79.9362 42.1438 81.2434 42.8351 82.802 43.3882C84.3605 43.9412 85.9568 44.2178 87.5908 44.2178C88.9734 44.2178 90.0921 44.0669 90.9468 43.7653C91.8015 43.4636 92.4299 43.0614 92.8321 42.5586C93.2344 42.0307 93.4355 41.44 93.4355 40.7864C93.4355 39.9819 93.1464 39.3409 92.5682 38.8633C91.99 38.3605 91.2359 37.9709 90.3057 37.6944C89.4008 37.3927 88.3827 37.1162 87.2514 36.8648C86.1453 36.6134 85.0267 36.3243 83.8955 35.9975C82.7894 35.6456 81.7713 35.2057 80.8412 34.6778C79.9362 34.1247 79.1946 33.3957 78.6164 32.4907C78.0382 31.5857 77.7491 30.4294 77.7491 29.0216C77.7491 27.5887 78.1262 26.2815 78.8804 25.1C79.6597 23.8934 80.8286 22.9381 82.3872 22.2343C83.9709 21.5053 85.9694 21.1408 88.3827 21.1408C89.9664 21.1408 91.5375 21.3419 93.0961 21.7441C94.6547 22.1463 96.0121 22.7245 97.1685 23.4786L95.6225 27.2871C94.441 26.5832 93.2218 26.0679 91.9649 25.7411C90.708 25.3891 89.5013 25.2132 88.345 25.2132C86.9875 25.2132 85.8814 25.3766 85.0267 25.7034C84.1971 26.0302 83.5812 26.4575 83.179 26.9854C82.802 27.5133 82.6134 28.1166 82.6134 28.7954C82.6134 29.5998 82.8899 30.2534 83.443 30.7562C84.0212 31.2338 84.7627 31.6109 85.6677 31.8874C86.5978 32.1639 87.6285 32.4404 88.7597 32.717C89.891 32.9683 91.0096 33.2574 92.1157 33.5842C93.2469 33.911 94.265 34.3384 95.17 34.8663C96.1001 35.3942 96.8417 36.1106 97.3948 37.0156C97.9729 37.9206 98.262 39.0644 98.262 40.447C98.262 41.8547 97.8724 43.1619 97.0931 44.3686C96.3389 45.5501 95.17 46.5053 93.5863 47.2344C92.0026 47.9382 90.0041 48.2902 87.5908 48.2902ZM103.961 55.4923C102.981 55.4923 102 55.3289 101.02 55.0021C100.04 54.6753 99.2226 54.2228 98.569 53.6446L100.454 50.1755C100.932 50.6029 101.472 50.9423 102.076 51.1936C102.679 51.445 103.295 51.5707 103.923 51.5707C104.778 51.5707 105.469 51.357 105.997 50.9297C106.525 50.5023 107.015 49.7859 107.468 48.7804L108.637 46.1408L109.014 45.5752L116.631 27.7773H121.156L111.729 49.5345C111.1 51.0428 110.397 52.2369 109.617 53.1167C108.863 53.9966 108.008 54.6125 107.053 54.9644C106.123 55.3163 105.092 55.4923 103.961 55.4923ZM108.109 48.6295L99.0215 27.7773H103.923L111.314 45.1604L108.109 48.6295ZM135.527 27.551C137.136 27.551 138.569 27.8653 139.826 28.4937C141.108 29.1222 142.113 30.09 142.842 31.3972C143.571 32.6793 143.936 34.3384 143.936 36.3746V47.9131H139.222V36.9779C139.222 35.1931 138.795 33.8608 137.94 32.9809C137.111 32.1011 135.942 31.6612 134.434 31.6612C133.327 31.6612 132.347 31.8874 131.492 32.3399C130.638 32.7924 129.971 33.4711 129.494 34.3761C129.041 35.2559 128.815 36.3746 128.815 37.7321V47.9131H124.102V27.7773H128.589V33.2072L127.797 31.548C128.501 30.266 129.519 29.2856 130.851 28.6068C132.209 27.903 133.767 27.551 135.527 27.551ZM159.19 48.177C157.079 48.177 155.193 47.7371 153.534 46.8573C151.9 45.9523 150.618 44.7205 149.688 43.1619C148.758 41.6034 148.293 39.8311 148.293 37.8452C148.293 35.8341 148.758 34.0619 149.688 32.5284C150.618 30.9698 151.9 29.7506 153.534 28.8708C155.193 27.991 157.079 27.551 159.19 27.551C161.151 27.551 162.873 27.9532 164.356 28.7577C165.865 29.537 167.008 30.6933 167.788 32.2268L164.168 34.3384C163.564 33.3831 162.823 32.6793 161.943 32.2268C161.088 31.7743 160.158 31.548 159.153 31.548C157.996 31.548 156.953 31.7994 156.023 32.3022C155.093 32.8049 154.364 33.534 153.836 34.4892C153.308 35.4193 153.044 36.538 153.044 37.8452C153.044 39.1524 153.308 40.2836 153.836 41.2389C154.364 42.169 155.093 42.8854 156.023 43.3882C156.953 43.891 157.996 44.1423 159.153 44.1423C160.158 44.1423 161.088 43.9161 161.943 43.4636C162.823 43.0111 163.564 42.3072 164.168 41.352L167.788 43.4636C167.008 44.9719 165.865 46.1408 164.356 46.9704C162.873 47.7748 161.151 48.177 159.19 48.177Z" fill="#43474B" />
            <path d="M183.665 48.2902C180.045 48.2902 177.204 47.2721 175.143 45.2359C173.106 43.1996 172.088 40.2585 172.088 36.4123V21.5178H176.99V36.2238C176.99 38.9387 177.568 40.9121 178.725 42.1438C179.906 43.3756 181.565 43.9915 183.702 43.9915C185.839 43.9915 187.486 43.3756 188.642 42.1438C189.798 40.9121 190.376 38.9387 190.376 36.2238V21.5178H195.203V36.4123C195.203 40.2585 194.172 43.1996 192.111 45.2359C190.075 47.2721 187.259 48.2902 183.665 48.2902ZM212.777 48.177C211.143 48.177 209.647 47.8 208.29 47.0458C206.958 46.2917 205.889 45.1604 205.085 43.6521C204.305 42.1187 203.916 40.183 203.916 37.8452C203.916 35.4822 204.293 33.5465 205.047 32.0382C205.826 30.5299 206.882 29.4113 208.214 28.6823C209.547 27.9281 211.068 27.551 212.777 27.551C214.763 27.551 216.51 27.9784 218.018 28.8331C219.552 29.6878 220.758 30.8819 221.638 32.4153C222.543 33.9487 222.996 35.7587 222.996 37.8452C222.996 39.9317 222.543 41.7542 221.638 43.3128C220.758 44.8462 219.552 46.0403 218.018 46.895C216.51 47.7497 214.763 48.177 212.777 48.177ZM201.616 55.2283V27.7773H206.103V32.5284L205.952 37.8829L206.329 43.2374V55.2283H201.616ZM212.249 44.1423C213.38 44.1423 214.386 43.891 215.266 43.3882C216.171 42.8854 216.887 42.1564 217.415 41.2012C217.943 40.2459 218.207 39.1272 218.207 37.8452C218.207 36.538 217.943 35.4193 217.415 34.4892C216.887 33.534 216.171 32.8049 215.266 32.3022C214.386 31.7994 213.38 31.548 212.249 31.548C211.118 31.548 210.1 31.7994 209.195 32.3022C208.29 32.8049 207.573 33.534 207.046 34.4892C206.518 35.4193 206.254 36.538 206.254 37.8452C206.254 39.1272 206.518 40.2459 207.046 41.2012C207.573 42.1564 208.29 42.8854 209.195 43.3882C210.1 43.891 211.118 44.1423 212.249 44.1423Z" fill="#621DED" />
            <rect width="60.2533" height="60.4199" rx="12.1637" transform="matrix(0.98472 0.174144 -0.173154 0.984895 10.4619 0)" fill="#621DED" fill-opacity="0.3" />
            <rect x="7.78577" y="7.80859" width="54.2231" height="54.3827" rx="12.1637" fill="#621DED" />
            <path d="M18.3291 40.5352C21.1909 37.5643 28.5513 34.3574 34.4454 39.629C41.2233 45.6912 48.3025 46.33 51.4655 42.9522" stroke="white" stroke-width="1.52046" />
            <path d="M18.3291 34.4925C21.1909 31.5216 28.5513 28.3147 34.4454 33.5863C41.2233 39.6485 48.3025 40.2872 51.4655 36.9095" stroke="white" stroke-width="1.52046" />
            <path d="M18.3291 28.45C21.1909 25.4791 28.5513 22.2722 34.4454 27.5438C41.2233 33.606 48.3025 34.2448 51.4655 30.867" stroke="white" stroke-width="1.52046" />
            <path d="M76.9147 13.8427C77.2715 13.9659 77.5862 13.9984 77.8586 13.94C78.1311 13.8816 78.3744 13.6837 78.5884 13.3464L78.9193 12.8307L79.0458 12.6944L81.4202 8.10141H82.6657L79.7075 13.5994C79.4675 14.06 79.182 14.4103 78.8512 14.6503C78.5203 14.8904 78.1635 15.0234 77.7808 15.0493C77.4045 15.0818 77.012 15.0104 76.6033 14.8352L76.9147 13.8427ZM79.0166 13.7843L75.9805 8.10141H77.3331L79.7075 12.8112L79.0166 13.7843ZM86.5175 12.8599C86.271 12.9766 86.0083 13.0739 85.7293 13.1518C85.4568 13.2231 85.1681 13.2588 84.8632 13.2588C84.208 13.2588 83.6988 13.1064 83.3355 12.8015C82.9722 12.4966 82.7905 12.023 82.7905 11.3807V9.71675H84.0069V11.3029C84.0069 11.6467 84.1042 11.8965 84.2988 12.0522C84.5 12.2079 84.7757 12.2857 85.126 12.2857C85.3595 12.2857 85.5931 12.2565 85.8266 12.1981C86.0602 12.1398 86.2905 12.0587 86.5175 11.9549V12.8599ZM86.4299 14.9131V9.71675H87.6463V14.9131H86.4299ZM92.4349 14.9131V13.8621L92.3667 13.6383V11.7992C92.3667 11.4424 92.2597 11.1667 92.0456 10.972C91.8315 10.7709 91.5072 10.6704 91.0725 10.6704C90.7806 10.6704 90.4919 10.7158 90.2065 10.8066C89.9275 10.8974 89.6907 11.0239 89.4961 11.1861L89.0193 10.3006C89.2982 10.0865 89.6291 9.92759 90.0118 9.82379C90.4011 9.7135 90.8033 9.65836 91.2185 9.65836C91.971 9.65836 92.5516 9.84001 92.9603 10.2033C93.3755 10.5601 93.5831 11.1148 93.5831 11.8673V14.9131H92.4349ZM90.8 14.9812C90.4108 14.9812 90.0702 14.9163 89.7783 14.7866C89.4864 14.6503 89.2593 14.4655 89.0971 14.2319C88.9414 13.9919 88.8636 13.7227 88.8636 13.4242C88.8636 13.1323 88.9317 12.8696 89.0679 12.636C89.2107 12.4025 89.441 12.2176 89.7588 12.0814C90.0767 11.9451 90.4984 11.877 91.0239 11.877H92.5322V12.6847H91.1114C90.6963 12.6847 90.4173 12.7528 90.2746 12.889C90.1319 13.0188 90.0605 13.181 90.0605 13.3756C90.0605 13.5962 90.1481 13.7713 90.3232 13.9011C90.4984 14.0308 90.7417 14.0957 91.0531 14.0957C91.3515 14.0957 91.6174 14.0276 91.851 13.8913C92.091 13.7551 92.2629 13.554 92.3667 13.288L92.5711 14.0178C92.4543 14.3227 92.2435 14.5595 91.9386 14.7282C91.6402 14.8969 91.2606 14.9812 90.8 14.9812ZM97.4529 14.9812C96.908 14.9812 96.4214 14.8677 95.9933 14.6406C95.5716 14.4071 95.2407 14.0892 95.0007 13.687C94.7607 13.2848 94.6407 12.8274 94.6407 12.3149C94.6407 11.7959 94.7607 11.3386 95.0007 10.9429C95.2407 10.5406 95.5716 10.226 95.9933 9.99895C96.4214 9.77189 96.908 9.65836 97.4529 9.65836C97.9589 9.65836 98.4033 9.76216 98.7861 9.96975C99.1753 10.1709 99.4705 10.4693 99.6716 10.865L98.7374 11.4099C98.5817 11.1634 98.3903 10.9818 98.1633 10.865C97.9427 10.7482 97.7027 10.6898 97.4432 10.6898C97.1448 10.6898 96.8755 10.7547 96.6355 10.8845C96.3955 11.0142 96.2074 11.2023 96.0711 11.4489C95.9349 11.6889 95.8668 11.9776 95.8668 12.3149C95.8668 12.6523 95.9349 12.9442 96.0711 13.1907C96.2074 13.4307 96.3955 13.6156 96.6355 13.7454C96.8755 13.8751 97.1448 13.94 97.4432 13.94C97.7027 13.94 97.9427 13.8816 98.1633 13.7648C98.3903 13.6481 98.5817 13.4664 98.7374 13.2199L99.6716 13.7648C99.4705 14.1541 99.1753 14.4557 98.7861 14.6698C98.4033 14.8774 97.9589 14.9812 97.4529 14.9812ZM101.785 14.9131V10.4563L102.067 10.7482H99.9552V9.71675H104.821V10.7482H102.719L103.001 10.4563V14.9131H101.785ZM105.703 14.9131V9.71675H106.919V11.8284H109.537V9.71675H110.753V14.9131H109.537V12.8599H106.919V14.9131H105.703ZM112.384 14.9131V9.71675H113.6V13.142L116.471 9.71675H117.58V14.9131H116.364V11.4878L113.503 14.9131H112.384ZM122.943 14.9131L121.065 12.422L122.058 11.8089L124.374 14.9131H122.943ZM119.216 14.9131V9.71675H120.433V14.9131H119.216ZM120.072 12.8307V11.8186H121.834V12.8307H120.072ZM122.174 12.4609L121.036 12.3246L122.943 9.71675H124.247L122.174 12.4609ZM131.648 14.9131L129.77 12.422L130.762 11.8089L133.078 14.9131H131.648ZM127.921 14.9131V9.71675H129.137V14.9131H127.921ZM128.777 12.8307V11.8186H130.538V12.8307H128.777ZM130.879 12.4609L129.74 12.3246L131.648 9.71675H132.952L130.879 12.4609ZM136.081 14.9812C135.549 14.9812 135.076 14.8677 134.66 14.6406C134.245 14.4071 133.918 14.0892 133.678 13.687C133.437 13.2848 133.317 12.8274 133.317 12.3149C133.317 11.7959 133.437 11.3386 133.678 10.9429C133.918 10.5406 134.245 10.226 134.66 9.99895C135.076 9.77189 135.549 9.65836 136.081 9.65836C136.62 9.65836 137.096 9.77189 137.512 9.99895C137.933 10.226 138.261 10.5374 138.494 10.9331C138.734 11.3288 138.854 11.7894 138.854 12.3149C138.854 12.8274 138.734 13.2848 138.494 13.687C138.261 14.0892 137.933 14.4071 137.512 14.6406C137.096 14.8677 136.62 14.9812 136.081 14.9812ZM136.081 13.94C136.379 13.94 136.645 13.8751 136.879 13.7454C137.113 13.6156 137.294 13.4275 137.424 13.181C137.56 12.9345 137.628 12.6458 137.628 12.3149C137.628 11.9776 137.56 11.6889 137.424 11.4489C137.294 11.2023 137.113 11.0142 136.879 10.8845C136.645 10.7547 136.383 10.6898 136.091 10.6898C135.792 10.6898 135.526 10.7547 135.293 10.8845C135.066 11.0142 134.884 11.2023 134.748 11.4489C134.612 11.6889 134.544 11.9776 134.544 12.3149C134.544 12.6458 134.612 12.9345 134.748 13.181C134.884 13.4275 135.066 13.6156 135.293 13.7454C135.526 13.8751 135.789 13.94 136.081 13.94ZM140.056 14.9131V9.71675H141.331L143.423 13.4048H142.917L145.116 9.71675H146.255L146.264 14.9131H145.165V11.0207L145.359 11.1472L143.413 14.3682H142.888L140.932 11.0596L141.165 11.0012V14.9131H140.056ZM151.049 14.9131V13.8621L150.981 13.6383V11.7992C150.981 11.4424 150.874 11.1667 150.659 10.972C150.445 10.7709 150.121 10.6704 149.686 10.6704C149.394 10.6704 149.106 10.7158 148.82 10.8066C148.541 10.8974 148.305 11.0239 148.11 11.1861L147.633 10.3006C147.912 10.0865 148.243 9.92759 148.626 9.82379C149.015 9.7135 149.417 9.65836 149.832 9.65836C150.585 9.65836 151.166 9.84001 151.574 10.2033C151.989 10.5601 152.197 11.1148 152.197 11.8673V14.9131H151.049ZM149.414 14.9812C149.025 14.9812 148.684 14.9163 148.392 14.7866C148.1 14.6503 147.873 14.4655 147.711 14.2319C147.555 13.9919 147.477 13.7227 147.477 13.4242C147.477 13.1323 147.546 12.8696 147.682 12.636C147.825 12.4025 148.055 12.2176 148.373 12.0814C148.691 11.9451 149.112 11.877 149.638 11.877H151.146V12.6847H149.725C149.31 12.6847 149.031 12.7528 148.888 12.889C148.746 13.0188 148.674 13.181 148.674 13.3756C148.674 13.5962 148.762 13.7713 148.937 13.9011C149.112 14.0308 149.356 14.0957 149.667 14.0957C149.965 14.0957 150.231 14.0276 150.465 13.8913C150.705 13.7551 150.877 13.554 150.981 13.288L151.185 14.0178C151.068 14.3227 150.857 14.5595 150.552 14.7282C150.254 14.8969 149.875 14.9812 149.414 14.9812ZM153.702 14.9131V9.71675H154.919V11.8284H157.536V9.71675H158.753V14.9131H157.536V12.8599H154.919V14.9131H153.702ZM163.944 14.3487V10.7482H161.949L161.92 11.5851C161.907 11.8835 161.888 12.1722 161.862 12.4512C161.836 12.7236 161.794 12.9766 161.735 13.2102C161.677 13.4372 161.593 13.6254 161.482 13.7746C161.372 13.9238 161.226 14.0211 161.044 14.0665L159.838 13.8816C160.032 13.8816 160.188 13.82 160.305 13.6967C160.428 13.567 160.522 13.3918 160.587 13.1712C160.658 12.9442 160.71 12.6879 160.743 12.4025C160.775 12.1106 160.798 11.8089 160.811 11.4975L160.879 9.71675H165.161V14.3487H163.944ZM159.653 16.0711V13.8816H165.929V16.0711H164.791V14.9131H160.782V16.0711H159.653ZM172.261 14.9131V9.71675H173.477V14.9131H172.261ZM169.546 11.4294C170.214 11.4294 170.72 11.5786 171.064 11.877C171.414 12.1754 171.589 12.5971 171.589 13.142C171.589 13.7064 171.395 14.1476 171.005 14.4655C170.623 14.7769 170.078 14.9293 169.371 14.9228L167.016 14.9131V9.71675H168.232V11.4197L169.546 11.4294ZM169.264 14.0276C169.62 14.0341 169.893 13.9595 170.081 13.8038C170.269 13.6481 170.363 13.421 170.363 13.1226C170.363 12.8242 170.269 12.6101 170.081 12.4803C169.899 12.3441 169.627 12.2727 169.264 12.2663L168.232 12.2565V14.0178L169.264 14.0276Z" fill="black" />
          </svg>

          <nav className="header__nav">
            <a
              className="header__nav--link"
              href="/">
              Мои работы
            </a>
            <a
              className="header__nav--link"
              href="/">
              Связаться со мной
            </a>
            <a
              className="header__nav--link"
              href="https://github.com/sinkvane"
              target="_blank">
              Мой GitHub
            </a>
          </nav> {/* header__nav */}

        </div> {/* header__inner */}

      </header>
    </>
  )
}