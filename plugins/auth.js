export default function({ $auth }) {
    $auth.onRedirect((to, from) => {
      console.log(to)
      // you can optionally change `to` by returning a new value
    })
   }
   