/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //Code here!!
        
        
//start function
      $("#btn").on("click",function () {
        var total =parseFloat(document.getElementById('total').value);
        var lose =parseFloat( document.getElementById('lose').value);
        var New = parseFloat(document.getElementById('new').value);
        var old = parseFloat(document.getElementById('old').value);
        var years = parseFloat(document.getElementById('no').value);
        var answ;
        if((total+ total * ((years*old)/100) ) <=  (total-lose+ total * ((years*New)/100) ) ){
                answ ="!-----BUY NEW-----!<br>";
                answ +="Old value  =  "+(total+ total * ((years*old)/100) ) +"<br>";
                answ +="New value  =  "+(total-lose+ total * ((years*New)/100) ) +"<br>";           
        }
        else{
                answ ="!-----Don't Buy it-----!<br>";
                answ +="Old value  =  "+(total+ total * ((years*old)/100) ) +"<br>";
                answ +="New value  =  "+(total-lose+ total * ((years*New)/100) ) +"<br>";  
        }
        document.getElementById("msg").innerHTML = answ;
    
//end function

        });
       
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
     
      
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        var lose = document.getElementById('lose').value; 
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();