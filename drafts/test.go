// go get -u github.com/vmihailenco/msgpack

package main

import (
    "fmt"
    "github.com/vmihailenco/msgpack"
    "io/ioutil"
)

func main() {

    buf, err := ioutil.ReadFile("data.msgp")
    if err != nil {
        panic(err)
    }

    var out map[string]interface{}
    err = msgpack.Unmarshal(buf, &out)
    if err != nil {
        panic(err)
    }

	fmt.Printf(out.predict([[163,0,0,1]]))
    // for k, v := range out {
    //     fmt.Printf("key[%v] value[%v]\n", k, v)
    // }
}