import Head from "next/head";

const Header = ({ title = "Community Project" }) => {
  return (
    <Head>
      <title>{title}</title>
      {/* <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossOrigin="anonymous"
      /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css"
      />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/icons.css" />
      <link rel="stylesheet" href="/assets/css/custom.css" />
      <link rel="stylesheet" href="/login.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      ></link>

      {/* <link rel="stylesheet" type="text/css" href="styles.css" /> */}
    </Head>
  );
};

export default Header;
