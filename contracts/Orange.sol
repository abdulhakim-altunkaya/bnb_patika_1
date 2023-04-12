// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.9;

contract Orange {
    struct Cities {
        string CityName;
        uint CityPopulation;
    }

    Cities public myCity = Cities("Maputo", 5);

    function assignCity(string memory _cityName, uint _cityPopulation) external {
        myCity = Cities(_cityName, _cityPopulation);
    }

    
}
