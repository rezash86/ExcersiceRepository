/**
 * WARNING This document contains technical data the export of which is or
 * may be restricted by Canada's Export and Import Permits Act R.S.C., 1985, c. E-19.
 * Diversion contrary to Canadian law is prohibited. The export, re-export,
 * transfer or re-transfer of this technical data to any other company, entity,
 * person, or destination, or for any use or purpose other than that for which
 * the technical data was originally provided, is prohibited without prior
 * written approval from CS-Canada and authorization under applicable export
 * control laws. Exported under the authority of license exception provided by
 * the Export Control List (ECL).
 * 
 * ECL Classification [P-ECCN US classification]: NLR [N/A]
 * 
 * Copyright 2017 CS Communication and Systems Canada Inc. All Rights Reserved.
 * 
 * The Information contained herein is confidential property of CS Communication
 * and Systems Canada Inc.
 * 
 * The use, copying, transfer or disclosure of such information is prohibited
 * except by express written agreement with CS Communication and Systems Canada
 * Inc.
 */

package ca.cscanada.model_controller;

import java.util.LinkedList;

import org.springframework.stereotype.Component;

import ca.cscanada.model.Configuration;
import ca.cscanada.model.SoftwareCRC;

/**
 *
 * @author tbdiri
 */

@Component
public class ConfigurationController
{
    public Configuration getTargetConfiguration()
    {
        Configuration configuration = new Configuration();
        configuration.setSpuName("EEC 800");
        SoftwareCRC as = new SoftwareCRC("AS", "12345632");
        SoftwareCRC os = new SoftwareCRC("OS", "28347897");
        LinkedList<SoftwareCRC> software = new LinkedList<SoftwareCRC>();
        software.add(as); 
        software.add(os);
        configuration.setSoftwareCRC(software);
        configuration.setPartNumber("324-34245-53");
        return configuration;
    }
}
