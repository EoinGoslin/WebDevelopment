-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 23, 2018 at 05:28 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Assignment 5`
--

-- --------------------------------------------------------

--
-- Table structure for table `ReadingList`
--

CREATE TABLE `ReadingList` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `name` text NOT NULL,
  `url` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ReadingList`
--

INSERT INTO `ReadingList` (`ID`, `date`, `name`, `url`, `description`) VALUES
(1, '2018-04-23', 'nineteeneightyfour', 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four', 'Best book ever'),
(30, '2018-04-21', 'harry Potter', 'http://hpwishlist.warnerbros.com/', 'wizards and stuff but also good old fashioned fun'),
(31, '2018-04-23', 'Animal Farm', 'https://en.wikipedia.org/wiki/Animal_Farm', 'Great ole book');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ReadingList`
--
ALTER TABLE `ReadingList`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ReadingList`
--
ALTER TABLE `ReadingList`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
