// import React from 'react'
import React, { useState } from 'react';
import food2 from './food2.json';
import './FoodSearch.scss'
import $ from 'jquery';
import './F_allstyles.css'

const FoodSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  function fetchData() {

    const filteredData = food2.filter(item => item.Descrip.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(filteredData)
    setData(filteredData);

  }

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  // that code to to sort the data elements according to the ascending and descending order
  var properties = [
    'name',
    'wins',
    'draws',
    'losses',
    'total',
  ];

  $.each(properties, function (i, val) {

    var orderClass = '';

    $("#" + val).click(function (e) {
      e.preventDefault();
      $('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
      $(this).toggleClass('filter__link--active');
      $('.filter__link').removeClass('asc desc');

      if (orderClass == 'desc' || orderClass == '') {
        $(this).addClass('asc');
        orderClass = 'asc';
      } else {
        $(this).addClass('desc');
        orderClass = 'desc';
      }

      var parent = $(this).closest('.header__item');
      var index = $(".header__item").index(parent);
      var $table = $('.table-content');
      var rows = $table.find('.table-row').get();
      var isSelected = $(this).hasClass('filter__link--active');
      var isNumber = $(this).hasClass('filter__link--number');

      rows.sort(function (a, b) {

        var x = $(a).find('.table-data').eq(index).text();
        var y = $(b).find('.table-data').eq(index).text();

        if (isNumber == true) {

          if (isSelected) {
            return x - y;
          } else {
            return y - x;
          }

        } else {

          if (isSelected) {
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          } else {
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
          }
        }
      });

      $.each(rows, function (index, row) {
        $table.append(row);
      });

      return false;
    });

  });

  return (
    <>
    <center><h3 className='dataph'>
      Here we can search any kind of food ingredients and get the 
      nutrient value of the ingredient in every kind of food / recipe
    </h3></center>
      <center>

        <form className='searchbox' onSubmit={handleSubmit}>
          <div className='searchbox1'>
            <input className='typesearch' type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search..." />
          </div>
          <button type="submit" class=" searchbtn btn btn-secondary btn-sm">Search the ingredient</button>

        </form>

      </center>

      <div class="container">

        <div class="table">
          <div class="table-header">
            <div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
            <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Energy_kcal</a></div>
            <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Protein_g</a></div>
            <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Saturated_fats_g</a></div>
            <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Fat_g</a></div>
            <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Carb_g</a></div>
          </div>
          <div class="table-content">
            {data.map(item => (
              <div class="table-row">
                <div class="table-data">{item.Descrip}</div>
                <div class="table-data">{item.Energy_kcal}</div>
                <div class="table-data">{item.Protein_g}</div>
                <div class="table-data">{item.Saturated_fats_g}</div>
                <div class="table-data">{item.Fat_g}</div>
                <div class="table-data">{item.Carb_g}</div>
              </div>
            ))}

          </div>
        </div>
      </div>



    </>
  );
}


export default FoodSearch


