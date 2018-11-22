import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native';
import ChessTile from './ChessTile';

var W = Dimensions.get('window').width/8;

export default class ChessBoard extends Component
{
    drawBoard = () =>
    {
        var Rows = [];
        var Tiles = [];

        for(let i=0 ; i < 8 ; i++)
        {
            var Tiles = [];
            for(let j=0 ; j < 8 ; j++)
            {
                if(i%2 == 0)
                {
                    if(j%2 == 0)
                        Tiles.push(<ChessTile key={j} width={W} height={W} color='#FFFFFF'></ChessTile>)

                    else
                        Tiles.push(<ChessTile key={j} width={W} height={W} color='#979797'></ChessTile>)
                }

                else
                {
                    if(j%2 == 0)
                        Tiles.push(<ChessTile key={j} width={W} height={W} color='#979797'></ChessTile>)

                    else
                        Tiles.push(<ChessTile key={j} width={W} height={W} color='#FFFFFF'></ChessTile>)
                }
            }

            Rows.push(<View key={i} style={{flexDirection: 'row'}}>{Tiles}</View>)
        }
        return Rows
    }

    render()
    {
        return(
            <View>{this.drawBoard()}</View>
        )
    }
}